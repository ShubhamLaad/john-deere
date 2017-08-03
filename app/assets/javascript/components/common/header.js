import ClassSet from '../../mixins/class-set.js';

class Header extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            showFormSearch: false,
            showMenu: false
        };
        this._toggleFromSearch = this._toggleFromSearch.bind(this);
    }

    _toggleFromSearch() {
        this.setState({
            showFormSearch: !this.state.showFormSearch
        });
    }

    render () {

        let fromSearchClass = ClassSet.getClassSet({
            'pull-right fromWrap': true,
            'showFromWrap': this.state.showFormSearch
        });

        return (
            <header>
                <div className="container">
                    <div className="topWrap clearfix">
                        <ul>
                            <li>
                                <a>English-INR</a>
                            </li>
                            <li>
                                <a>Track Order</a>
                            </li>
                            <li>
                                <div className="glyphicon glyphicon-shopping-cart">
                                    <span>18</span>
                                </div>
                            </li>
                            <li>
                                <a>Hi, Santosh Patil</a>
                            </li>
                        </ul>
                    </div>
                    <div className="middleWrap clearfix text-center">
                        <h1 className="pull-left">
                            <a href="javascript:void(0)" title="home">
                                <img src="/assets/image/logo.png" className="img-responsive" alt="logo"/>
                            </a>
                        </h1>
                        <div className="mobileWrap pull-right hidden-lg hidden-md">
                            <a href="javascript:void(0)" className="glyphicon glyphicon-search" onClick={this._toggleFromSearch}></a>
                            <a href="javascript:void(0)" className="glyphicon glyphicon-menu-hamburger"></a>
                        </div>
                        <div className={fromSearchClass}>
                            <form className="input-group">
                                <input type="text" className="form-control"/>
                                <span type="submit" className="input-group-addon"><i className="glyphicon glyphicon-search"></i></span>
                            </form>
                        </div>
                    </div>
                    <div className="bottomWrap clearfix">
                        <ul className="mainLinkList">
                            <li>
                                <a href="javascript:void(0)">
                                    <span>Agriculture</span>
                                    <i className="menuIcon"></i>
                                </a>
                                <div className="subLinkList">
                                    <a href="javascript:void(0)">fgdgdsg</a>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <span>Construction</span>
                                    <i className="menuIcon"></i>
                                </a>
                                <div className="subLinkList">
                                    <a href="javascript:void(0)">fgdgdsg</a>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <span>Engines & Drivetrains</span>
                                    <i className="menuIcon"></i>
                                </a>
                                <div className="subLinkList">
                                    <a href="javascript:void(0)">fgdgdsg</a>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <span>Forestry</span>
                                    <i className="menuIcon"></i>
                                </a>
                                <div className="subLinkList">
                                    <a href="javascript:void(0)">fgdgdsg</a>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <span>Lawn & Garden</span>
                                    <i className="menuIcon"></i>
                                </a>
                                <div className="subLinkList">
                                    <a href="javascript:void(0)">fgdgdsg</a>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <span>Military</span>
                                    <i className="menuIcon"></i>
                                </a>
                                <div className="subLinkList">
                                    <a href="javascript:void(0)">fgdgdsg</a>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <span>Sports Turf</span>
                                    <i className="menuIcon"></i>
                                </a>
                                <div className="subLinkList">
                                    <a href="javascript:void(0)">fgdgdsg</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
};

export default Header;
