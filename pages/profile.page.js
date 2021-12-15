import AppPage from './app.page';

class ProfilePage extends AppPage {
    get iconUser() {return $('img[alt="avatarIcon"]')}

}

export default new ProfilePage();
