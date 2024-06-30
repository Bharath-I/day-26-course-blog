/* eslint-disable react/prop-types */
export function Cards({ name, poster }) {
    return (
        <>
            <div className="card col-4-sm"  >
                <img src={poster} className="card-img-top"  alt="#"/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
            </div>
        </>
    )
}