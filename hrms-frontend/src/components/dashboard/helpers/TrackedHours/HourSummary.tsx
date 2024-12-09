function HourSummary({ label,value } : { label: string, value: string }){
    return (
        <div className="flex gap-2 items-center mt-6">
            <div   />
            <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-light-primary"></span>   <span className="font-bold  text-[12px]">{label}</span>
                </div>
                <span className="font-bold  text-[12px]">{value}</span>
            </div>
        </div>
    )
}
export default HourSummary