import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { whiteNextIcon } from "../../../assets/dashboardAssets";
import {
  circledBackIcon,
  loadingEditPlan,
} from "../../../assets/viewPlanAssets";
import DndEditor from "./DndEditor";
import DndSidebar from "./DndSidebar";
import DragableMenuItem from "./DragableMenuItem";
import menuItemsData, { MenuItemsDataI } from "./menuItemsData";
import DndEditorChild from "./DndEditorChild";
import { useNavigate, useParams } from "react-router-dom";
import {
  getChapterContentApi,
  updateChapterContentApi,
} from "../../../services/api/EditPlan";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import {
  TopicSection,
  BlankSection,
} from "../../../components/DataFormats/BlankSection";
import ButtonWithSvg from "../../../components/button/ButtonWithSvg";
import { leftArrowBlackIcon, rightArrowIcon } from "../../../assets";
import { clearChapterContent } from "../../../redux/slices/EditPlan/getChapterContentSlice";
import CompleteYourBusinessPlan from "../../../components/DataFormats/CompleteYourBusinessPlan";
import { successMessage } from "../../../utils/message";
import PlanLimitModal from "../../../components/modals/PlanLimitModal";
import { io, Socket } from "socket.io-client";
import { getBusinessPlanInfoApi } from "../../../services/api/PlanSetup";

const menuItems = menuItemsData.map((item) => ({
  id: item.id,
  data: item,
  element: (
    <div className="bg-info bg-opacity-20 rounded-md p-3 flex gap-1 flex-col items-start hover:bg-opacity-5">
      <div className="flex gap-2 items-center ">
        <img src={item.icon} alt="" className=" !h-5 !w-5" />
        <h1 className="text-[#fff]">{item.title}</h1>
      </div>
      <p className="text-foreground text-xs tracking-tight font-thin">
        {item.description}
      </p>
    </div>
  ),
}));
const SOCKET_SERVER_URL = import.meta.env.VITE_BASE_URL_SOCKET;
// const SOCKET_SERVER_URL = "http://192.168.18.4:4000/realtime";
const DragDropMain = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activeColumn, setActiveColumn] = useState(null);
  const [activeColumnChild, setActiveColumnChild] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<null | MenuItemsDataI>(null);
  const [saveButton, setSaveButton] = useState([]);
  const [saveChangesDisabled, setSaveChangesDisabled] = useState(false);
  const getBusinessPlanInfo = useSelector(
    (state: RootState) => state.getBusinessPlanInfo
  );
  const currentSelectedBusinessPlan = useSelector(
    (state: RootState) => state.currentSelectedBusinessPlan
  );

  const getSubscriptionPlan = useSelector(
    (state: RootState) => state.getUserSubscribedplan
  );

  useEffect(() => {
    if (
      getBusinessPlanInfo?.data === null &&
      currentSelectedBusinessPlan?.businessPlan?.id
    ) {
      getBusinessPlanInfoApi(
        currentSelectedBusinessPlan?.businessPlan?.id,
        dispatch
      );
    }
  }, [currentSelectedBusinessPlan?.businessPlan?.id]);

  // for routing
  useEffect(() => {
    if (getBusinessPlanInfo?.data) {
      !checkAllArraysNotEmpty(getBusinessPlanInfo?.data) &&
        !getSubscriptionPlan?.data?.data?.benefit?.package?.isFree &&
        navigate("/edit-plan");
    }
  }, [getBusinessPlanInfo, getSubscriptionPlan]);

  const checkAllArraysNotEmpty = (obj: { [key: string]: any }) => {
    const { staffing, equity, product, services } = obj;

    const staffingAndEquityValid =
      Array.isArray(staffing) &&
      staffing.length > 0 &&
      Array.isArray(equity) &&
      equity.length > 0;

    const productsOrServicesValid =
      (Array.isArray(product) && product.length > 0) ||
      (Array.isArray(services) && services.length > 0);

    return staffingAndEquityValid && productsOrServicesValid;
  };

  const [activeColumnChildOverReceiver, setActiveColumnChildOverReceiver] =
    useState<any>(null);

  const [pushObject, setPushObject] = useState<any>([]);
  const columnsId = useMemo(() => {
    return selectedMenu ? selectedMenu.childMenuItems.map((col) => col.id) : [];
  }, [selectedMenu]);
  const getBusinessCount = useSelector(
    (state: RootState) => state.getBusinessCount
  );

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    })
  );
  const handleSidebarCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const { id: chapterIdGetFromRouter } = useParams();
  const [chapterId, setChapterId] = useState<string | undefined | null>(null);
  const getChapter = useSelector((state: RootState) => state.getChapter);
  const getChapterContent = useSelector(
    (state: RootState) => state.getChapterContent
  );
  // for route

  useEffect(() => {
    const businessCount = getBusinessCount?.data?.data;
    if (getChapter?.data?.data && businessCount) {
      const ChaptersCount = businessCount?.allowed?.chapters;
      const editePlanAllow = getChapter?.data?.data
        ?.filter((filterItem: any, index: number) => index < ChaptersCount)
        .find((findItem: any) => findItem?.id == chapterIdGetFromRouter);
      if (!editePlanAllow) {
        navigate("/edit-plan");
      }
    }
  }, [getChapter, getBusinessCount]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const newSocket: Socket = io(SOCKET_SERVER_URL);
    if (chapterId) {
      newSocket.on(
        `Content-CreateEvent-${chapterId}-${currentSelectedBusinessPlan?.businessPlan?.id}`,
        () => {
          getChapterContentApi(
            dispatch,
            chapterId,
            currentSelectedBusinessPlan?.businessPlan?.id
          );
        }
      );
    }
    return () => {
      newSocket.close();
    };
  }, [chapterId]);

  useEffect(() => {
    setChapterId(chapterIdGetFromRouter);

    return () => {
      setPushObject(null);
      dispatch(clearChapterContent());
    };
  }, [chapterIdGetFromRouter]);

  useEffect(() => {
    if (chapterId && currentSelectedBusinessPlan?.businessPlan?.id) {
      getChapterContentApi(
        dispatch,
        chapterId,
        currentSelectedBusinessPlan?.businessPlan?.id
      );
    }
  }, [currentSelectedBusinessPlan, chapterId]);

  function extractData(data: any): any[] {
    function processObject(obj: any): any[] {
      let results: any[] = [];
      if (Array.isArray(obj)) {
        results = obj;
      } else if (typeof obj === "object" && obj !== null) {
        if (Object.keys(obj)?.includes("type")) {
          results = [obj];
        } else {
          for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              results = processObject(obj[key]);
            }
          }
        }
      }
      return results;
    }

    return processObject(data);
  }

  useEffect(() => {
    if (getChapterContent?.data?.data?.content?.length > 0) {
      const myObj = getChapterContent?.data?.data?.content?.map((item: any) => {
        if (item?.content === "loading" || item?.content === "error") {
          return "loading";
        }

        const changeItem = extractData(JSON.parse(item?.content));
        return changeItem;
      });

      const myNewObj = myObj?.map((item: any) =>
        item === "loading" || item === "error"
          ? ["loading"]
          : item?.map((obj: any) =>
              obj === "loading" || obj === "error"
                ? obj
                : Object.keys(obj)?.includes("id")
                ? { ...obj }
                : { ...obj, id: generateId() }
            )
      );

      setPushObject([...myNewObj]);
      setSaveButton(myNewObj);
    } else {
      setPushObject(null);
    }
  }, [getChapterContent]);

  const callEditApiHandler = async () => {
    const promises = [];
    for (let i = 0; i < pushObject?.length; i++) {
      if (
        getChapterContent?.data?.data?.content?.length > 0 &&
        pushObject[i][0] !== "loading"
      ) {
        const id = getChapterContent?.data?.data?.content?.[i]?.id;
        const promise = updateChapterContentApi(dispatch, id, {
          content: JSON.stringify([...pushObject?.[i]]),
        });
        promises.push(promise);
      }
    }

    try {
      await Promise.all(promises);
      successMessage("Content updated");
    } catch (error) {
      console.error("An error occurred while updating chapter content:", error);
    }
  };

  function matchContent(): boolean {
    if (!getChapterContent?.data?.data?.content || !pushObject) {
      return true;
    }

    for (let i = 0; i < getChapterContent?.data?.data?.content?.length; i++) {
      const originalContent =
        getChapterContent?.data?.data?.content?.[i]?.content !== "loading" &&
        getChapterContent?.data?.data?.content?.[i]?.content !== "error"
          ? extractData(
              JSON.parse(getChapterContent?.data?.data?.content?.[i]?.content)
            )
          : "loading";

      const secondNewContent: any = saveButton?.[i];

      if (originalContent?.length !== secondNewContent?.length) {
        return false;
      }
    }

    return true;
  }

  useEffect(() => {
    if (
      getChapterContent?.data?.data?.content &&
      pushObject &&
      getChapterContent.data.data.content.length > 0 &&
      pushObject.length > 0
    ) {
      matchContent();
    }
  }, [getChapterContent]);

  const contentsMatched = matchContent();

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const contentArray =
    getChapterContent?.data?.data?.content?.map(
      (item: any, index: number) => item.topic
    ) || [];
  const totalTopicsArray =
    getChapterContent?.data?.data?.totalTopics?.data || [];

  const missingObjects = totalTopicsArray.filter(
    (topic: any) =>
      !contentArray.some((contentItem: any) => contentItem.id === topic.id)
  );

  return (
    <div className="flex w-full min-h-[70%] gap-2 ">
      <DndContext
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        sensors={sensors}
        onDragOver={onDragover}
      >
        <div className="flex gap-4 w-full min-h-full relative">
          <div
            className="h-[100vh] "
            style={{
              width: !isCollapsed ? "64px" : "350px",
              transform: !isCollapsed ? "translate(-350px)" : "",
              transition: !isCollapsed
                ? "all 0s ease-in-out"
                : "all 0.5s ease-in-out",
            }}
          ></div>
          {/* Sidebar collapse button */}
          <div
            className="fixed left-[345px] bottom-1/2 h-[100px] z-20 w-[22px] bg-primary flex items-center justify-center rounded-md"
            style={{
              transform: !isCollapsed
                ? "translateX(-285px) translateY(50%)"
                : "translateY(50%)",
              transition: !isCollapsed
                ? "all 0s ease-in-out"
                : "all 0.5s ease-in-out",
            }}
            onClick={handleSidebarCollapse}
          >
            <img
              src={whiteNextIcon}
              alt=""
              className={`${
                isCollapsed ? "rotate-180" : "rotate-0"
              } transition-all duration-500  `}
            />
          </div>
          {/* drag and drop editor  */}
          <div
            className="h-[86%] w-[350px] fixed overflow-y-auto over custom-scrollbar z-20"
            style={{
              transform: !isCollapsed ? "translate(-350px)" : "",
              transition: "all 0.2s ease-in-out",
            }}
          >
            <SortableContext items={columnsId}>
              {selectedMenu ? (
                <div className="flex flex-col gap-2 bg-body rounded-tr-[30px] rounded-br-[30px] w-full p-[10px] h-full pl-20 overflow-y-auto ">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => setSelectedMenu(null)}
                    className="bg-info text-title rounded-md p-3 flex gap-1 items-center cursor-pointer"
                  >
                    <img src={circledBackIcon} alt="" />
                    <h1 className="text-title"> {selectedMenu.title}</h1>
                  </motion.div>
                  {selectedMenu.childMenuItems.map((item, key) => (
                    <DragableMenuItem item={item} key={key} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-2 bg-body rounded-tr-[30px] rounded-br-[30px] w-full p-[10px] h-full overflow-y-auto custom-scrollbar">
                  {menuItems.map((item: any, key: number) => (
                    <DndSidebar
                      item={item}
                      setSelectedMenu={setSelectedMenu}
                      key={key}
                    />
                  ))}
                </div>
              )}
            </SortableContext>
          </div>
          <div className="flex-1 min-h-full h-max w-full m-3 px-[10px]">
            <div className="border-[5px] border-strokes bg-[white] p-[20px]">
              <BlankSection
                handleClick={() => callEditApiHandler()}
                chapterNumber={
                  getChapter?.data?.data?.filter(
                    (item: any) => item?.id == chapterId
                  )?.[0]?.chapterNo
                }
                chapterTitle={
                  getChapter?.data?.data?.filter(
                    (item: any) => item?.id == chapterId
                  )?.[0]?.title
                }
                checkSaveChanges={contentsMatched}
                saveChangesDisabled={saveChangesDisabled}
              >
                <>
                  {pushObject?.length > 0 &&
                    pushObject?.map((item: any, index: number) => (
                      <TopicSection
                        editAnswerHandler={() =>
                          navigate(
                            `/questions/${getChapterContent?.data?.data?.content?.[index]?.topicId}`
                          )
                        }
                        edit={item?.[0] !== "loading"}
                        key={index}
                        headingNumber={`${
                          getChapter?.data?.data?.filter(
                            (item: any) => item?.id == chapterId
                          )?.[0]?.chapterNo
                        }.${
                          getChapterContent?.data?.data?.content?.[index]?.topic
                            ?.topicNo
                        }`}
                        heading={
                          getChapterContent?.data?.data?.content?.[index]?.topic
                            ?.title
                        }
                        chapterTitle={
                          getChapter?.data?.data?.filter(
                            (item: any) => item?.id == chapterId
                          )?.[0]?.title
                        }
                      >
                        {item?.[0] == "loading" ? (
                          <div className="bg-[#F8F8F8] mt-[10px] py-[40px] px-[20px] flex justify-center items-center ">
                            <img
                              src={loadingEditPlan}
                              className="w-[60px] h-[60px]"
                            />
                            <p className="text-[18px] text-[#212838] leading-[33px]">
                              Please be patient while your plan is being
                              generated.
                            </p>
                          </div>
                        ) : (
                          <DndEditor
                            key={index}
                            pushObject={pushObject}
                            setPushObject={setPushObject}
                            index={index}
                            headingNumber={`${
                              getChapter?.data?.data?.filter(
                                (item: any) => item?.id == chapterId
                              )?.[0]?.chapterNo
                            }.${
                              getChapterContent?.data?.data?.content?.[index]
                                ?.topic?.topicNo
                            }`}
                            setSaveChangesDisabled={setSaveChangesDisabled}
                          />
                        )}
                      </TopicSection>
                    ))}

                  {getChapterContent?.data?.data?.isChapterComplete ==
                    false && (
                    <CompleteYourBusinessPlan
                      headingNumber={`${
                        getChapter?.data?.data?.filter(
                          (item: any) => item?.id == chapterId
                        )?.[0]?.chapterNo
                      }`}
                      heading={missingObjects}
                      chapterTitle={
                        getChapter?.data?.data?.filter(
                          (item: any) => item?.id == chapterId
                        )?.[0]?.title
                      }
                    />
                  )}
                </>
              </BlankSection>
            </div>
            <div
              className={`flex  py-[20px] ${
                getChapter?.data?.data?.findIndex(
                  (item: any) => item?.id == chapterId
                ) <= 0
                  ? "justify-end"
                  : "justify-between"
              }`}
            >
              {getChapter?.data?.data?.findIndex(
                (item: any) => item?.id == chapterId
              ) > 0 && (
                <ButtonWithSvg
                  isLeft
                  icon={leftArrowBlackIcon}
                  title={"Previous Chapter"}
                  iconStyles={"w-[18px]"}
                  type="secondary"
                  onClick={() =>
                    navigate(
                      `/edit-plan/${
                        getChapter?.data?.data?.[
                          getChapter?.data?.data?.findIndex(
                            (item: any) => item?.id == chapterId
                          ) - 1
                        ]?.id
                      }`
                    )
                  }
                  sm
                  disabled={
                    getChapter?.data?.data?.findIndex(
                      (item: any) => item?.id == chapterId
                    ) <= 0
                  }
                />
              )}
              <ButtonWithSvg
                icon={rightArrowIcon}
                onClick={() => {
                  if (
                    getChapter?.data?.data?.findIndex(
                      (item: any) => item?.id == chapterId
                    ) +
                      1 ===
                    getBusinessCount?.data?.data?.allowed?.chapters
                  ) {
                    setIsModalOpen(true);
                  } else {
                    navigate(
                      `/edit-plan/${
                        getChapter?.data?.data?.[
                          getChapter?.data?.data?.findIndex(
                            (item: any) => item?.id == chapterId
                          ) + 1
                        ]?.id
                      }`
                    );
                  }
                }}
                disabled={
                  getChapter?.data?.data?.findIndex(
                    (item: any) => item?.id == chapterId
                  ) >=
                  getChapter?.data?.data?.length - 1
                }
                title={"Next Chapter"}
                type="primary"
                sm
              />
            </div>
            <PlanLimitModal
              title="Full Access"
              onCancel={handleCancel}
              isVisible={isModalOpen}
            />
          </div>
        </div>

        {createPortal(
          <DragOverlay>
            {activeColumn && <DragableMenuItem item={activeColumn} />}
            {activeColumnChild && (
              <div className="opacity-20">
                <DndEditorChild item={activeColumnChild} />
              </div>
            )}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </div>
  );
  function onDragStart(event: DragStartEvent) {
    if (event?.active?.data?.current?.type === "MenuItem") {
      setActiveColumn(event?.active?.data?.current?.item);

      setActiveColumnChildOverReceiver({
        ...event?.active?.data?.current?.item,
        id: generateId(),
      });
    }
    if (event?.active?.data?.current?.type === "MenuItemChild") {
      setActiveColumnChild(event?.active?.data?.current?.item);
    }
  }

  function onDragEnd(event: DragEndEvent) {
    setActiveColumn(null);
    setActiveColumnChild(null);
    const { active, over } = event;

    if (!over) return;

    const overReceiver = over.data.current?.type !== "Receiver";
    const isOverAColumnChild = over.data.current?.type !== "MenuItemChild";

    // if (overReceiver && isOverAColumnChild) {
    //   //   setPushObject((pre: any) => {
    //   //     const differentArr = pre?.filter(
    //   //       (item: any) => item?.id != activeColumnChildOverReceiver?.id
    //   //     );
    //   //     return differentArr;
    //   //   });
    // }
    setActiveColumnChildOverReceiver(null);
  }

  function onDragover(event: DragOverEvent) {
    const { active, over } = event;

    if (!over) return;
    const activeId = active?.id;
    const overId = over?.id;

    if (activeId === overId) return;
    const isActiveAColumn = active.data.current?.type == "MenuItem";
    const isOverAColumn = over.data.current?.type == "MenuItem";
    const isActiveAColumnChild = active.data.current?.type === "MenuItemChild";

    if (!isActiveAColumn && !isActiveAColumnChild) return;

    // In dropping a Task over another Task
    const isOverAReceiver = over.data.current?.type === "Receiver";
    const isOverAColumnChild = over.data.current?.type === "MenuItemChild";
    //In dropping a Task over a column

    if (!isOverAReceiver && !isOverAColumnChild) {
      setPushObject((pre: any) => {
        if (!pre) {
          return pre;
        }
        const columns = [...pre];

        let activeArrayIndex = -1;
        let activeIndex = -1;

        // Find the indices for activeId and overId
        columns.forEach((arr: any[], arrayIndex: number) => {
          arr.map((item: any, i: number) => {
            if (item.id == activeColumnChildOverReceiver?.id) {
              activeArrayIndex = arrayIndex;
              activeIndex = i;
              return item;
            } else {
              return item;
            }
          });
        });

        if (activeIndex !== -1) {
          columns[activeArrayIndex]?.splice(activeIndex, 1);
        }

        return columns;
      });
      return;
    }
    if (isActiveAColumnChild && !isOverAColumnChild && isOverAReceiver) {
      setPushObject((pre: any) => {
        if (!pre) {
          return pre;
        }
        const columns = [...pre];

        let activeArrayIndex = -1;
        let activeIndex = -1;
        let overArrayIndex = -1;
        let overIndex = -1;

        // Find the indices for activeId and overId
        columns.forEach((arr: any[], arrayIndex: number) => {
          let activeItemIndex = -1;
          arr.map((item: any, i: number) => {
            if (item.id == activeId) {
              activeItemIndex = i;
              return item;
            } else {
              return item;
            }
          });
          if (activeItemIndex !== -1) {
            activeArrayIndex = arrayIndex;
            activeIndex = activeItemIndex;
          }
          let overItemIndex = -1;

          if (`Receiver${arrayIndex}` == overId) {
            overArrayIndex = arrayIndex;
            overIndex = overItemIndex;
          } else {
            arr.map((item: any, i: number) => {
              if (item.id == overId) {
                overItemIndex = i;
                return item;
              } else {
                return item;
              }
            });
            if (overItemIndex === 0) {
              overArrayIndex = arrayIndex;
              overIndex = overItemIndex;
            }
          }
        });
        // If both indices are found, proceed to move the item
        if (
          activeArrayIndex !== -1 &&
          overArrayIndex !== -1 &&
          overIndex !== -1
        ) {
          const [movedItem] = columns[activeArrayIndex].splice(activeIndex, 1);

          if (activeArrayIndex === overArrayIndex) {
            // If both items are in the same nested array
            columns[overArrayIndex].splice(overIndex, 0, movedItem);
          }
          // else {
          //   // If items are in different nested arrays
          //   columns[overArrayIndex].splice(overIndex, 0, movedItem);
          // }
        }

        // if move content of one topic to another

        // else if (
        //   activeArrayIndex !== -1 &&
        //   overArrayIndex !== -1 &&
        //   overIndex == -1
        // ) {
        //   const [movedItem] = columns[activeArrayIndex].splice(activeIndex, 1);

        //   if (activeArrayIndex === overArrayIndex) {
        //     // If both items are in the same nested array
        //     columns[overArrayIndex].splice(overIndex, 0, movedItem);
        //   } else {
        //     // If items are in different nested arrays
        //     columns[overArrayIndex].splice(0, 0, movedItem);
        //   }
        // }

        return columns;
      });

      return;
    }

    if (isActiveAColumnChild && isOverAColumnChild) {
      setPushObject((pre: any) => {
        if (!pre) {
          return pre;
        }
        const columns = [...pre];

        let activeArrayIndex = -1;
        let activeIndex = -1;
        let overArrayIndex = -1;
        let overIndex = -1;

        // Find the indices for activeId and overId
        columns.forEach((arr: any[], arrayIndex: number) => {
          const activeItemIndex = arr.findIndex((t: any) => t?.id === activeId);

          if (activeItemIndex !== -1) {
            activeArrayIndex = arrayIndex;
            activeIndex = activeItemIndex;
          }
          const overItemIndex = arr.findIndex((t: any) => t?.id === overId);
          if (overItemIndex !== -1) {
            overArrayIndex = arrayIndex;
            overIndex = overItemIndex;
          }
        });

        // If both indices are found, proceed to move the item
        if (activeArrayIndex !== -1 && overArrayIndex !== -1) {
          const [movedItem] = columns[activeArrayIndex].splice(activeIndex, 1);

          if (activeArrayIndex === overArrayIndex) {
            // If both items are in the same nested array
            columns[overArrayIndex].splice(overIndex, 0, movedItem);
          } else {
            // If items are in different nested arrays
            columns[activeArrayIndex].splice(0, 0, movedItem);
          }
        }

        return columns;
      });

      return;
    }
    if (isActiveAColumn && isOverAColumnChild) {
      setPushObject((pre: any) => {
        if (!pre) {
          return pre;
        }
        const columns = [...pre];

        let activeArrayIndex = -1;
        let activeIndex = -1;
        let overArrayIndex = -1;
        let overIndex = -1;

        // Find the indices for activeId and overId
        columns.forEach((arr: any[], arrayIndex: number) => {
          arr.map((item: any, i: number) => {
            if (item.id == activeColumnChildOverReceiver?.id) {
              activeArrayIndex = arrayIndex;
              activeIndex = i;
              return item;
            } else {
              return item;
            }
          });
          const overItemIndex = arr.findIndex((t: any) => t?.id === overId);
          if (overItemIndex !== -1) {
            overArrayIndex = arrayIndex;
            overIndex = overItemIndex;
          }
        });

        if (overArrayIndex !== -1 && activeIndex == -1) {
          columns[overArrayIndex]?.splice(
            overIndex,
            0,
            activeColumnChildOverReceiver
          );
        } else {
          if (activeArrayIndex && columns[activeArrayIndex]) {
            const [movedItem] = columns[activeArrayIndex]?.splice(
              activeIndex,
              1
            );

            // if (activeArrayIndex === overArrayIndex) {
            // If both items are in the same nested array
            columns[overArrayIndex]?.splice(overIndex, 0, movedItem);
            // }
          }
        }

        return columns;
      });

      return;
    }

    if (isActiveAColumn && isOverAReceiver) {
      // work complete
      setPushObject((pre: any) => {
        if (!pre) {
          return pre;
        }
        const columns = [...pre];

        let activeArrayIndex = -1;
        let activeIndex = -1;
        let overArrayIndex = -1;
        let overIndex = -1;

        // Find the indices for activeId and overId
        columns.forEach((arr: any[], arrayIndex: number) => {
          arr.map((item: any, i: number) => {
            if (item.id == activeColumnChildOverReceiver?.id) {
              activeArrayIndex = arrayIndex;
              activeIndex = i;
              return item;
            } else {
              return item;
            }
          });
          let overItemIndex = -1;
          if (`Receiver${arrayIndex}` == overId) {
            overArrayIndex = arrayIndex;
            overIndex = overItemIndex;
          } else {
            arr.map((item: any, i: number) => {
              if (item.id == overId) {
                overItemIndex = i;
                return item;
              } else {
                return item;
              }
            });
            if (overItemIndex === 0) {
              overArrayIndex = arrayIndex;
              overIndex = overItemIndex;
            }
          }
        });

        if (overArrayIndex !== -1 && activeIndex == -1) {
          columns[overArrayIndex].splice(
            overIndex,
            0,
            activeColumnChildOverReceiver
          );
        } else {
          const [movedItem] = columns[activeArrayIndex].splice(activeIndex, 1);

          // if (activeArrayIndex === overArrayIndex) {
          // If both items are in the same nested array
          columns[overArrayIndex].splice(overIndex, 0, movedItem);
          // }
        }

        return columns;
      });
      return;
    }
  }

  function generateId() {
    const now = new Date();

    const datePart =
      now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate(); // YYYYMMDD
    const timePart =
      now.getHours() * 10000 + now.getMinutes() * 100 + now.getSeconds(); // HHMMSS
    const millisecondsPart = now.getMilliseconds(); // MS
    const randomPart = Math.floor(Math.random() * 1000); // Random 3 digits

    // Combine the parts into a single number
    const id =
      datePart * 1000000000 +
      timePart * 10000 +
      millisecondsPart * 1000 +
      randomPart;
    return id;
  }
};

export default DragDropMain;
