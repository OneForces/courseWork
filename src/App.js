import React from "react";
import styles from './App.module.scss';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import { Dashboard } from "./views/Dashboard";
import { Content } from "./views/Content";
import { About } from "./views/About";
import { Sidebar } from "./components/Sidebar";
import { Engraving } from "./views/Engraving";
import { Item } from "./views/Item";
import { SIDEBAR_ITEMS } from "./config/sidebar.config";
import { Catalog } from "./components/Catalog";
import { Reviews } from "./views/Reviews";
import { Order } from "./views/Order";

export const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Dashboard />
        <div className={styles.app}>
          <Sidebar items={SIDEBAR_ITEMS} />
          <Switch>
            <Route path='/about' component={About} />
            <Route path='/catalog' component={Content} />
            <Route path='/item/:itemId' component={Item} />
            <Route path='/order/:itemId' component={Order} />
            <Route path='/engraving' component={Engraving} />
            <Route path='/reviews' component={Reviews} />

            <Route path='/decoration' render={(p) => <Catalog {...p} tags={['серьги', 'цепи', 'подвески', 'браслеты']} />} />
            <Route path='/decoration/earrings' render={(p) => <Catalog {...p} tags={['серьги']} />} />
            <Route path='/decoration/chains' render={(p) => <Catalog {...p} tags={['цепи']} />} />
            <Route path='/decoration/pendants' render={(p) => <Catalog {...p} tags={['подвески']} />} />
            <Route path='/decoration/bracelets' render={(p) => <Catalog {...p} tags={['браслеты']} />} />

            <Route path='/material' render={(p) => <Catalog {...p} tags={['золото', 'белое', 'желтое', 'микс', 'серебро']} />} />
            <Route path='/material/gold' render={(p) => <Catalog {...p} tags={['золото']} />} />
            <Route path='/material/white-gold' render={(p) => <Catalog {...p} tags={['белое']} />} />
            <Route path='/material/yellow-gold' render={(p) => <Catalog {...p} tags={['желтое']} />} />
            <Route path='/material/mixed-gold' render={(p) => <Catalog {...p} tags={['микс']} />} />
            <Route path='/material/silver' render={(p) => <Catalog {...p} tags={['серебро']} />} />

            <Route path='/souvenirs' render={(p) => <Catalog {...p} tags={['трости', 'ручки', 'очки', 'зажимы', 'ножи']} />} />
            <Route path='/souvenirs/silver-canes' render={(p) => <Catalog {...p} tags={['трости']} />} />
            <Route path='/souvenirs/silver-pens' render={(p) => <Catalog {...p} tags={['ручки']} />} />
            <Route path='/souvenirs/cases-for-glasses' render={(p) => <Catalog {...p} tags={['очки']} />} />
            <Route path='/souvenirs/money-clips' render={(p) => <Catalog {...p} tags={['зажимы']} />} />
            <Route path='/souvenirs/silver-knives' render={(p) => <Catalog {...p} tags={['ножи']} />} />

            <Route path='/series' render={(p) => <Catalog {...p} tags={['black', 'space', 'жасмин', '999']} />} />
            <Route path='/series/black-series' render={(p) => <Catalog {...p} tags={['black']} />} />
            <Route path='/series/space' render={(p) => <Catalog {...p} tags={['space']} />} />
            <Route path='/series/jasmine' render={(p) => <Catalog {...p} tags={['жасмин']} />} />
            <Route path='/series/999' render={(p) => <Catalog {...p} tags={['999']} />} />

            <Route path='/wedding' render={(p) => <Catalog {...p} tags={['помолвочные', 'обручальные', 'невеста', 'жених']} />} />
            <Route path='/wedding/engagement-rings' render={(p) => <Catalog {...p} tags={['помолвочные']} />} />
            <Route path='/wedding/wedding-rings' render={(p) => <Catalog {...p} tags={['обручальные']} />} />
            <Route path='/wedding/women' render={(p) => <Catalog {...p} tags={['невеста']} />} />
            <Route path='/wedding/man' render={(p) => <Catalog {...p} tags={['жених']} />} />

            <Route path='/pwe' render={(p) => <Catalog {...p} tags={['эмаль']} />} />

            <Redirect from='/' to='/catalog' />
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
};
