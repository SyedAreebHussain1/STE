import UsersSearch from "./UsersSearch";

type Props = {};

const Users = (props: Props) => {
  return (
    <div>
      <UsersSearch />
      <div className="pt-4 h-[500px] overflow-auto">
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </div>
  );
};

function User() {
  return (
    <div className="mx-4 py-4  border-b border-secondary flex items-center gap-2">
      <div className="w-[48px] h-[48px] rounded-full bg-black" />
      <h4 className="text-sm font-bold">Aman Khan</h4>
    </div>
  );
}

export default Users;
