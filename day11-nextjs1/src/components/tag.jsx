export const Tag = ({status, children}) => {
    if(status === "success"){
        return (
            <div className="flex gap-2 bg-emerald-100 border-emerald-400 p-2 rounded-lg">{children}</div>
        )
    };

    if(status === "error"){
        return (
            <div className="flex gap-2 bg-rose-100 border-rose-400 p-2 rounded-lg">{children}</div>
        )
    };

    return (
        <div className="flex gap-2 bg-slate-100 border-slate-400 p-2 rounded-lg">{children}</div>
    );


};
