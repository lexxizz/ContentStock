import React from 'react';
import {Router, Link} from 'react-router';


/**
 * Боковое меню разделов
 *
 * Использование
 *
 * __menu = [
 *      {title: "название пункта меню 1", href: "/ОТНСИТЕЛЬНАЯ ССЫЛКА1"},
 *      {title: "название пункта меню 2", href: "/ОТНСИТЕЛЬНАЯ ССЫЛКА2"}
 * ];
 *
 * this.props.location.pathname - если есть, в противном случае относительный текущий pathname
 *
 * <DivisionMenu menu={__menu} current={this.props.location.pathname} />
 */


class DivisionMenuElement extends React.Component {
    render() {
        return (
            <li className={this.props.active ? `active` : ``}>
                <Link to={this.props.href} >
                    <i className="fa fa-list-alt fa-fw"></i>{this.props.title}
                </Link>
            </li>
        );
    }
}

class DivisionMenu extends React.Component {

    render() {

        return (

            <ul className="nav nav-pills nav-stacked admin-menu">
                    {this.props.menu.map(((item, key) => {
                        return <DivisionMenuElement key={key} {...item} active={this.props.current.indexOf(item.href) > -1 || (item.base_href && this.props.current.indexOf(item.base_href) > -1)} />
                    }).bind(this))}
            </ul>
        );
    }

}

export default DivisionMenu;