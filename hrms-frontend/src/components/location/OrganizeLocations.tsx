import LocationSelect from "./LocationSelect"
import LocationsSearch from "./LocationsSearch"

type Props = {}

const OrganizeLocations = (props: Props) => {
  return (
    <div className="bg-[#FAFAFA] border border-borderColor h-screen">
      <div className="py-2">
        <LocationsSearch />
      </div>
      <div className="px-7 py-4">
        <p className="text-[#808080] text-sm">Organize locations to be used as geofences or for reporting.</p>
      </div>
      <div>
        <LocationSelect />
      </div>
    </div>
  )
}

export default OrganizeLocations