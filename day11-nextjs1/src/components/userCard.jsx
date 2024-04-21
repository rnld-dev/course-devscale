

export const UserCard = ({nama, umur, gender}) => {
    if(gender=="female"){
        return(
            <div className="border border-rose-200 bg-rose-200 p-4 rounded-lg">
            <div>Name: {nama} </div>
            <div>Umur: {umur} </div>
            <div>Gender: {gender} </div>
        </div>
        );
    };
    
    return(
        <div className="border border-blue-200 bg-blue-200 p-4 rounded-lg">
            <div>Name: {nama} </div>
            <div>Umur: {umur} </div>
            <div>Gender: {gender} </div>

        </div>
    );
};

