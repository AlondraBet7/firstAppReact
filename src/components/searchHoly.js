import React from "react";

class SearchHoly extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid m-5">
                    <div className="row">
                        <div className="col-md-2">
                            Logo
                        </div>
                        <div className="col-md-4">
                            <form className="row g-3">
                                <div className="col-auto"> 
                                    <input type="password" className="form-control" placeholder="Busca tu santo"></input>
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-primary mb-3">Buscar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SearchHoly;