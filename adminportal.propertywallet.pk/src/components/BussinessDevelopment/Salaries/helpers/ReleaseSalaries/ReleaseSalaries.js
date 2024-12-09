import ReleaseSalariesTable from './helpers/ReleaseSalariesTable'

const ReleaseSalaries = ({ rowId, setRowId }) => {
  return <ReleaseSalariesTable setRowId={setRowId} rowId={rowId} />
}
export default ReleaseSalaries
