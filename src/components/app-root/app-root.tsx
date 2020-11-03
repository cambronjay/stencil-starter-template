import '@ionic/core';

import { Component, Element, forceUpdate, Listen, State, h } from '@stencil/core';
import { Plugins } from '@capacitor/core';

const { SplashScreen } = Plugins;

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  @Element() el: any;

  @State() dark = false;

  @State() loggedIn = false;

  private appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    }
  ];

  @Listen('ionRouteWillChange')
  routeChanged() {
    forceUpdate(this.el);
  }

  async componentWillLoad() {

  }

  async componentDidLoad() {
    try {
      await SplashScreen.hide();
    } catch {
      return;
    }
  }

  private isActiveUrl(url: string) {
    const current = window.location.pathname;

    if (current.includes(url)) {
      return true;
    }

    return false;
  }

  renderRouter() {
    return (
      <ion-router useHash={false}>
        <ion-route-redirect from="/" to={'/home'} />
        <ion-route url="/home" component="screen-home"></ion-route>
      </ion-router>
    );
  }

  render() {
    return (
      <ion-app class={{
        'dark-theme': this.dark
      }}>
        {this.renderRouter()}
        <ion-split-pane content-id="menu-content">
          <ion-menu content-id="menu-content">
            <ion-content forceOverscroll={false}>
              <ion-list lines="none">
                <ion-list-header>Navigation</ion-list-header>
                {this.appPages.map((p) => (
                  <ion-menu-toggle autoHide={false}>
                    <ion-item detail={false} href={p.url} class={{ 'selected': this.isActiveUrl(p.url) }}>
                      <ion-icon slot="start" name={p.icon + '-outline'}></ion-icon>
                      <ion-label>{p.title}</ion-label>
                    </ion-item>
                  </ion-menu-toggle>
                ))}
              </ion-list>
            </ion-content>
          </ion-menu>

          <ion-router-outlet animated={false} id="menu-content"></ion-router-outlet>
        </ion-split-pane>
      </ion-app>
    );
  }
}