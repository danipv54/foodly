
export const CardSkeleton = () => {
    return (
        <div
            className='bg-white w-full py-4 px-12 rounded-lg shadow-lg my-2 space-y-2 animate-pulse'>
            <div className="h-4 bg-slate-200 rounded"></div>
            <div className="h-4 bg-slate-200 rounded"></div>
            <div className="h-4 bg-slate-200 rounded"></div>
        </div>
    )
}
