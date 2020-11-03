import { Component, h } from '@stencil/core';

@Component({
    tag: 'screen-home',
    styleUrl: 'screen-home.css',
})
export class ScreenHome {
    private screenTitle = 'Home';

    async componentWillLoad() {

    }

    render() {
        return [
            <ion-header translucent={true}>
                <ion-toolbar>
                    <ion-buttons slot="start">
                        <ion-menu-button></ion-menu-button>
                    </ion-buttons>
                    <ion-title>{this.screenTitle}</ion-title>
                </ion-toolbar>
            </ion-header>,

            <ion-content fullscreen={true} scrollX={false} scrollY={true}>
                <ion-header collapse="condense">
                    <ion-toolbar>
                        <ion-title size="large">{this.screenTitle}</ion-title>
                    </ion-toolbar>
                </ion-header>
                <ion-grid>
                    <ion-row justify-content-center align-items-center class="center-row">
                        <ion-col style={{
                            'max-width': '450px',
                            'min-width': '300px'
                        }}>
                            <ion-card>
                                <img src="../../assets/img/home/card.jpg" />
                                <ion-card-header>
                                    <ion-card-subtitle>Stencil</ion-card-subtitle>
                                    <ion-card-title>The Future</ion-card-title>
                                </ion-card-header>
                                <ion-card-content>
                                    This is a stencil starter template.
                                </ion-card-content>
                            </ion-card>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-content>
        ];
    }
}