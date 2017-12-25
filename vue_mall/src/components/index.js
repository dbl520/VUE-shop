import MTabbar from './packages/MTabbar/index.js'
import MHeader from './packages/MHeader/index.js'
import MFloor from './packages/MFloor/index.js'
import MGoodbox from './packages/MGoodbox/index.js'
import MCategorybox from './packages/MCategorybox/index.js'
import MLoginbar from './packages/MLoginbar/index.js'
import MButton from './packages/MButton/index.js'
import MGoodgroup from './packages/MGoodgroup/index.js'
import MCell from './packages/MCell/index.js'
import MSheetgroup from './packages/MSheetgroup/index.js'
import MTimepicker from './packages/MTimepicker/index.js'
import MToast from './packages/MToast/index.js'
import MSlidenav from './packages/MSlidenav/index.js'
import MIndicator from './packages/MIndicator/index.js'
import MImguploader from './packages/MImguploader/index.js'
const version = '1.0.0'

const install = function (Vue, config = {}) {
    if (install.installed) return
    Vue.component(MTabbar.name, MTabbar)
    Vue.component(MHeader.name, MHeader)
    Vue.component(MFloor.name, MFloor)
    Vue.component(MGoodbox.name, MGoodbox)
    Vue.component(MCategorybox.name, MCategorybox)
    Vue.component(MLoginbar.name, MLoginbar)
    Vue.component(MButton.name, MButton)
    Vue.component(MGoodgroup.name, MGoodgroup)
    Vue.component(MCell.name, MCell)
    Vue.component(MSheetgroup.name, MSheetgroup)
    Vue.component(MTimepicker.name, MTimepicker)
    Vue.component(MSlidenav.name, MSlidenav)
    Vue.component(MImguploader.name, MImguploader)

    Vue.$MToast = Vue.prototype.$MToast = MToast;
    Vue.$MIndicator = Vue.prototype.$MIndicator = MIndicator;
};

export default {
    version,
    install
}