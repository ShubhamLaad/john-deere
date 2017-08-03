import Header from '../components/common/header.js';
import Footer from '../components/common/footer.js';

const Container = React.createClass({
    render () {
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        );
    },
});

export default Container;
