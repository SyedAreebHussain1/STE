function HourSummary({ label, color, value } : { label: string, color: string, value: string }){
    return (
        <div className="flex gap-2 items-center mt-6">
            <div style={{ backgroundColor: color }} className="w-[12px] h-[12px]" />
            <div className="flex flex-col">
                <span className="text-[#808080] text-[.6875rem]">{label}</span>
                <span className="font-bold text-base">{value}</span>
            </div>
        </div>
    )
}
export default HourSummary