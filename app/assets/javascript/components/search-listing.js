import SearchListJSON from './search-listing-json.js';
import ClassSet from '../mixins/class-set.js';

class SearchListing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filterList: [],
            productList: [],
            showRefineBy: false,
        }
        this._toggleRefineBy = this._toggleRefineBy.bind(this);
    }

    componentDidMount() {
        this.setState({
            filterList: SearchListJSON.filterList,
            productList: SearchListJSON.productList
        });
    }

    _toggleRefineBy() {
        this.setState({
            showRefineBy: !this.state.showRefineBy
        });
    }

    _getRefineList() {
        return(<ul>{
            _.map(this.state.filterList, (filters, key) => {
                return(
                    <li key={key}>
                        <h4 className="text-uppercase">{filters.title}</h4>
                        <ul className="refineByList">{
                            _.map(filters.filter, (filter, key) => {
                                return(
                                    <li className="checkBoxWrap" key={key}>
                                        <input type="checkbox" id={`${filters.title}-${key}`} />
                                        <label htmlFor={`${filters.title}-${key}`}>
                                            <span className="checkboxIcon"></span>
                                            <span className="name">{filter}</span>
                                            <span className="number">(1)</span>
                                        </label>
                                    </li>
                                )
                            })
                        }</ul>
                        {
                            (filters.more) ? <a href="javascript:void(0)" className="moreText">{filters.more} MORE</a> : null
                        }
                    </li>
                )
            })
        }</ul>)
    }

    _getProductList() {
        return(<ul className="productList">{
            _.map(this.state.productList, (product, key) => {
                return(
                    <li className="clearfix" key={key}>
                        <div className="detailsHead clearfix visible-xs">
                            <h4 className="pull-left">{product.name}</h4>
                            <div className="pull-right">{product.id}</div>
                        </div>
                        <div className="productImageWrap pull-left">
                            <div className="imageWrap">
                                <img src={`/assets/image/product${key+1}.jpg`} className="img-responsive" alt=""/>
                            </div>
                            <div className="viewDetails">
                                {product.parts} Parts&nbsp;
                                <a href="javascript:void(0)">View Details</a>
                            </div>
                        </div>
                        <div className="productDetails pull-left hidden-xs">
                            <div className="detailsHead clearfix">
                                <h4 className="pull-left">{product.name}</h4>
                                <div className="pull-right">{product.id}</div>
                            </div>
                            <ul className="productDataList">
                                <li className="clearfix">
                                    <div className="pull-left">Equipment Category</div>
                                    <div>{product.equipmentCategory}</div>
                                </li>
                                <li className="clearfix">
                                    <div className="pull-left">Application</div>
                                    <div><a href="javascript:void(0)">{product.application}</a></div>
                                </li>
                                <li className="clearfix">
                                    <div className="pull-left">Compatible with</div>
                                    <div>{product.compatible}</div>
                                </li>
                                <li className="clearfix">
                                    <div className="pull-left">Overall Weight</div>
                                    <div>{product.overallWeight} KG</div>
                                </li>
                            </ul>
                        </div>
                        <div className="pull-left stockOrderWrap">
                            <div className="price">
                                <span>&#8377;{product.price}</span>&nbsp; Per Unit
                            </div>
                            <p>{product.available} Units are available</p>
                            <button className="btn primeBtn">STOCK ORDER</button>
                            <a href="javascript:void(0)">ADD TO WISHLIST</a>
                        </div>
                    </li>
                )}
            )}
        </ul>)
    }

    render () {

        let refineByWrapClass = ClassSet.getClassSet({
            'refineByWrap': true,
            'showRefineByWrap': this.state.showRefineBy,
        });

        return (
            <div className="container searchListingWrap">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href="/">Popular Product</a></li>
                    <li className="breadcrumb-item active">Tractors</li>
                </ul>
                <div className="refineShowingWrap clearfix">
                    <button className="refineByBtn btn primeBtn hidden-lg hidden-md" onClick={this._toggleRefineBy}>refine by</button>
                    <div className={refineByWrapClass}>
                        <h3 className="clearfix">
                            REFINE BY
                            <a href="javascript:void(0)" className="glyphicon glyphicon-remove pull-right" onClick={this._toggleRefineBy}></a>
                        </h3>
                        {this._getRefineList()}
                    </div>
                    <div className="productResultWrap">
                        <div className="headingWrap">
                            <h3>Showing results for SJ10</h3>
                            <div className="clearfix">
                                <div className="pull-left showingCount">Showing 1 - 5 of 5</div>
                                <div className="pull-right sortByWrap">
                                    <label>SORT BY</label>
                                    <select>
                                        <option>Relevance</option>
                                        <option>Price-Low to High</option>
                                        <option>Price-High to Low</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {this._getProductList()}
                    </div>
                </div>
            </div>
        );
    }
};

export default SearchListing;
