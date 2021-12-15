import AppPage from './app.page';
import ClientComponent from '../components/client.component'

class ClientsPage extends AppPage{
    clientCreation = ClientComponent;

    get createClient() {return $('//button[span[.="Create Client"]]')}

    async deleteClient(email){
        const options = $(`//tr[.//a[.="${email}"]]//span[contains(@class, "ant-dropdown-trigger")]`);
        await options.waitForClickable();
        await options.click();
        const itemDelete = $('//span[@class="ant-dropdown-menu-title-content"][.="Delete"]');
        await itemDelete.waitForClickable();
        await itemDelete.click();
        const buttonConfirm = $('//button[contains(@class, "ant-btn-dangerous")][span[.="OK"]]');
        await buttonConfirm.waitForClickable();
        await buttonConfirm.click();
    }
    async getItemByEmail(email){
        return $(`//tr[.//a[.="${email}"]]`)
    }
}

export default new ClientsPage();