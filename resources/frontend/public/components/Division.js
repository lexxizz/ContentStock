import React from 'react';
import DivisionMenu from './DivisionMenu';
/**
 * Раздел - страница разеделенная на 2 части: слева меню справа компонент
 */
class Division extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <DivisionMenu menu={this.props.menu} current={this.props.pathname} />
                    </div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Division;