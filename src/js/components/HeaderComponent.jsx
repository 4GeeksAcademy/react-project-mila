import "./HeaderComponent.css";
const HeaderComponent = () => {
    return (

        <div className="card-body bg-secondary bg-opacity-10 p-4" id="lestSee">
            <h1 className="card-title" id="headerTitle">A Warm Welcome!</h1>
            <p className="card-text pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolorem provident doloremque earum nulla voluptate dignissimos, facilis aspernatur temporibus ipsam rem, necessitatibus excepturi qui labore obcaecati ad error quo aliquam.</p>
            <a href="#" className="btn btn-primary w-20" id="buttonHeader">Call to action!</a>

        </div>

    );
}

export default HeaderComponent;