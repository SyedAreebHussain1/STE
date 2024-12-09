const PreviewCard = ({ item }: any) => {
    return (
        <div className="max-w-sm w-full bg-white border cursor-pointer bg-[#F2F4F8] p-[14px] border-gray-200 rounded-2xl shadow">
            <div>
                <img className="rounded-t-lg flex object-contain w-full h-[200px]" src={item.url} alt="" />
            </div>
            <div className='mt-2 p-1'>
                <h5 className=" text-[15px]  font-medium tracking-tight text-[#212838] ">{item.name}</h5>
            </div>
        </div>
    )
}

export default PreviewCard