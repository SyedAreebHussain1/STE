import React, { useEffect, useState } from "react";
import { Button, Checkbox, Divider, Modal, Table } from "antd";
import rolesManagementModalColumns from "../../../../../../utils/tableColumns/rolesManagementModalColumns.json";
import { TextInput } from "../../../../../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  createSystemRoleApi,
  getAllModulesApi,
} from "../../../../../../services/api/Dashboard/UserManagment";

type ArchiveModalProps = {
  open?: boolean;
  toggleOpen?: any;
};
interface DataSourceItem {
  id: number;
  title: string;
  label: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

type DataSource = DataSourceItem[];

const CreateRoleModal: React.FC<ArchiveModalProps> = ({
  open,
  toggleOpen,
}: ArchiveModalProps) => {
  const [dataSource, setDataSource] = useState<DataSource>([]);
  const dispatch = useDispatch();
  const [modules, setModules] = useState<[] | any>([]);
  const [title, setTitle] = useState<string>("");
  const getModule = useSelector((state: any) => state?.getAllModule);
  const createSystemRole = useSelector((state: any) => state?.createSystemRole);
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
      title: title,
      module: filteredModule,
    };
    if (body.title !== "" && body.module) {
      createSystemRoleApi(dispatch, body, onSuccess);
    }
  };
  function onSuccess() {
    toggleOpen();
    setTitle("");
  }
  useEffect(() => {
    if (getModule?.data?.data.length > 0) {
      const data = getModule?.data?.data?.map((item: any) => {
        return {
          label: item.label,
          companyModuleId: item.id,
          module: false,
          get: false,
          post: false,
          put: false,
          delete: false,
        };
      });
      setModules(data);
    }
  }, [getModule?.data]);

  useEffect(() => {
    if (modules.length > 0) {
      const data: DataSource = modules.map((item: any) => {
        return {
          id: item?.companyModuleId,
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
              <div>
                <span className="text-base font-medium">{item.label}</span>
              </div>
            </div>
          ),
          write: (
            <Checkbox
              type="checkbox"
              className="input  h-[18px] w-[18px] cursor-pointer"
              disabled={item.module === false}
              checked={item.post && item.module}
              onChange={() => onChange(item.id, "post")}
            />
          ),
          read: (
            <Checkbox
              type="checkbox"
              className="input  h-[18px] w-[18px] cursor-pointer"
              disabled={item.module === false}
              checked={item.get && item.module}
              onChange={() => onChange(item.id, "get")}
            />
          ),
          update: (
            <Checkbox
              type="checkbox"
              className="input  h-[18px] w-[18px] cursor-pointer"
              disabled={item.module === false}
              checked={item.put && item.module}
              onChange={() => onChange(item.id, "put")}
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
          <h3 className="!text-[.975rem] text-[#344054] !font-medium dark:text-white ">
            Create New Role
          </h3>
        }
        centered
        open={open}
        width={500}
        footer={null}
        onCancel={toggleOpen}
      >
        <Divider />
        <div>
          <div className="w-[243px]">
            <p className="font-medium text-[#667085] text-[.8125rem] dark-input-label  ">
              {" "}
              Role Title
            </p>
            <div>
              <TextInput
                className="bg-transparent !h-[48px] dark-input"
                placeholder="Enter Title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
        </div>
        <Divider />
        <div className="flex justify-center">
          <Table
            className="role-custom-table"
            dataSource={dataSource}
            columns={rolesManagementModalColumns}
            pagination={false}
            loading={getModule?.loading}
            scroll={{
              y: 280,
            }}
          />
        </div>
        <div className="flex justify-end mt-[30px] gap-3">
          <Button onClick={toggleOpen}>Cancel</Button>
          <Button
            onClick={handleCreateRole}
            className="bg-cyan-600 text-white"
            loading={createSystemRole?.loading}
          >
            Create Role
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default CreateRoleModal;
