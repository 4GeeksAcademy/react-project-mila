const CardComponent = () => {
    return (
        <div className="col">

            <div className="card h-100">
                <img
                    style={{ height: "100%", width: "100%", objectFit: "contain" }}
                    src="src/img/PlaceHolder.png"
                    alt="Project"
                />

                <div className="card-body text-center">

                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
                <div className="card-footer d-flex justify-content-center"><button className="btn btn-primary">Fin Out More!</button></div>
            </div>
        </div>
    );
}
export default CardComponent;