import React, { useEffect, useState } from "react";
import { Button, Checkbox, Divider, Modal, Table } from "antd";
import rolesManagementModalColumns from "../../../../../../utils/tableColumns/rolesManagementModalColumns.json";
import { TextInput } from "../../../../../../components";
import { useDispatch, useSelector } from "react-redux";
import { RoundedButton } from "../../../../../../components";
import { createSystemRoleApi, getAllModulesApi, getModuleBYRoleIdApi } from "../../../../../../services/api/Dashboard/UserManagment";

type ArchiveModalProps = {
  open?: boolean;
  setOpen?: any;
  roleData?: any;
};

interface DataSourceItem {
  key: number;
  id: JSX.Element;
  roleTitle: JSX.Element;
  createDate: JSX.Element;
  action: JSX.Element;
}

type DataSource = DataSourceItem[];
const UpdateRoleModal: React.FC<ArchiveModalProps> = ({
  open,
  setOpen,
  roleData,
}: ArchiveModalProps) => {
  const [dataSource, setDataSource] = useState<DataSource>([]);
  const dispatch = useDispatch();
  const [modules, setModules] = useState<any>([]);
  const [title, setTitle] = useState<string>("");
  const getModule = useSelector((state: any) => state?.getAllModule);
  const createCompanyRole = useSelector(
    (state: any) => state?.createCompanyRole
  );
  const getModuleBYRoleId = useSelector(
    (state: any) => state?.getModuleBYRoleId
  );
  useEffect(() => {
    getAllModulesApi(dispatch);
  }, [open]);

  function onChange(id: number, name: string) {
    let data;
    if (name === "module") {
      data = modules.map((item: any) => {
        if (item.companyModuleId === id && !item.module === false) {
          return {
            ...item,
            [name]: !item[name],
            get: false,
            post: false,
            update: false,
            delete: false,
          };
        } else if (item.companyModuleId === id && !item.module === true) {
          return {
            ...item,
            [name]: !item[name],
            get: true,
            post: true,
            update: true,
            delete: true,
          };
        } else {
          return item;
        }
      });
    } else {
      data = modules.map((item: any) => {
        if (item.companyModuleId === id) {
          return {
            ...item,
            [name]: !item[name],
          };
        }
        return item;
      });
    }

    setModules(data);
  }
  const handleCreateRole = () => {
    const moduletoSend = modules.map((item: any) => {
      return {
        companyModuleId: item.companyModuleId,
        get: item.get,
        put: item.update,
        delete: item.delete,
        post: item.post,
      };
    });
    const filteredModule = moduletoSend.filter(
      (item: any) => item.get || item.put || item.delete || item.post
    );
    const body = {
      roleId: Number(roleData?.id),
      title: title,
      module: filteredModule,
    };
    if (body.title !== "" && body.module.length && roleData?.id) {
      createSystemRoleApi(dispatch, body, onSuccess);

    }
  };
  function onSuccess() {
    onClose();
  }
  function onClose() {
    setOpen(false);
    setTitle("");
  }
  useEffect(() => {
    if (getModule?.data?.data?.length > 0) {
      const data = getModule?.data?.data.map((item: any) => {
        return {
          label: item.label,
          companyModuleId: item.id,
          module: false,
          get: false,
          post: false,
          update: false,
          delete: false,
        };
      });
      setModules(data);

      getModuleBYRoleIdApi(dispatch, roleData?.id, onSuccessRoleById, data);
    }
  }, [getModule?.data]);

  function onSuccessRoleById(data: any, modulesData: any) {
    setTitle(data?.title);
    const updateModules = [...modulesData];

    for (let i = 0; i < data?.systemAssignModuleMany?.length; i++) {
      for (let j = 0; j < updateModules.length; j++) {
        if (
          updateModules[j].companyModuleId ===
          data.systemAssignModuleMany[i].systemModuleId
        ) {
          const isModule =
            data.systemAssignModuleMany[i].get ||
              data.systemAssignModuleMany[i].post ||
              data.systemAssignModuleMany[i].put ||
              data.systemAssignModuleMany[i].delete
              ? true
              : false;
          updateModules[j] = {
            ...updateModules[j],
            get: data.systemAssignModuleMany[i].get,
            post: data.systemAssignModuleMany[i].post,
            update: data.systemAssignModuleMany[i].put,
            delete: data.systemAssignModuleMany[i].delete,
            module: isModule,
          };
          break;
        }
      }
    }
    setModules(updateModules);
  }

  useEffect(() => {
    if (modules.length > 0) {
      const data: any = modules.map((item: any) => {
        return {
          id: item.companyModuleId,
          permissions: (
            <div className="flex gap-1  items-center">
              <div>
                <Checkbox
                  type="checkbox"
                  className="input  h-[18px] w-[18px] cursor-pointer mr-1"
                  checked={item.module}
                  onChange={() => onChange(item.companyModuleId, "module")}
                />
              </div>
              <div className=" w-max">
                <span className="text-base   font-medium text-black dark:text-white">
                  {item.label}
                </span>
              </div>
            </div>
          ),
          write: (
            <Checkbox
              type="checkbox"
              className="input  h-[18px] w-[18px] cursor-pointer"
              disabled={item.module === false}
              checked={item.post && item.module}
              onChange={() => onChange(item.companyModuleId, "post")}
            />
          ),
          read: (
            <Checkbox
              type="checkbox"
              className="input  h-[18px] w-[18px] cursor-pointer"
              disabled={item.module === false}
              checked={item.get && item.module}
              onChange={() => onChange(item.companyModuleId, "get")}
            />
          ),
          update: (
            <Checkbox
              type="checkbox"
              className="input  h-[18px] w-[18px] cursor-pointer"
              disabled={item.module === false}
              checked={item.update && item.module}
              onChange={() => onChange(item.companyModuleId, "update")}
            />
          ),
          delete: (
            <Checkbox
              type="checkbox"
              className="input  h-[18px] w-[18px] cursor-pointer"
              disabled={item.module === false}
              checked={item.delete && item.module}
              onChange={() => onChange(item.companyModuleId, "delete")}
            />
          ),
        };
      });
      setDataSource(data);
    }
  }, [modules]);
  return (
    <div>
      <Modal
        title={
          <h3 className="!text-[.975rem] text-[#344054] !font-medium dark-input-label">
            Update Role
          </h3>
        }
        centered
        open={open}
        width={500}
        footer={null}
        onCancel={onClose}
      >
        <Divider />
        <div>
          <div className="w-[243px]">
            <p className="font-normal text-[#667085] text-[.8125rem] dark-input-label">
              {" "}
              Role Title
            </p>
            <div>
              <TextInput
                className="bg-transparent !h-[48px] dark-input"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
        </div>
        <Divider />
        <div className="flex justify-center">
          <Table
            className="role-custom-table "
            dataSource={dataSource}
            columns={rolesManagementModalColumns}
            pagination={false}
            loading={getModule?.loading || getModuleBYRoleId?.loading}
            scroll={{
              y: 280,
            }}
          />
        </div>
        <div className="flex justify-end mt-[30px] gap-3">

          <Button onClick={onClose}>Cancel</Button>
          <Button
            onClick={handleCreateRole}
            className="bg-cyan-600 text-white"
            loading={createCompanyRole?.loading}
          >
            Update Role
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default UpdateRoleModal;
