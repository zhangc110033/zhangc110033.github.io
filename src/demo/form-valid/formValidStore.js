import { observable } from 'mobx'
import { fieldValid, classValid } from 'validation-class'

@classValid({
    switcher: target => {
        return target.ready == true
    }
})
export default class {

    @observable ready = false

    @observable @fieldValid({
        require: true, help: "不可为空", validator: (value, target, result) => {
            if (target.building == "123") {
                result.valid = true
                result.help = ""
            } else {
                result.valid = false
                result.help = "楼栋必须是123"
            }
        }
    }) resblock

    @observable @fieldValid({ require: true, help: "不可为空且未数字", regex: /^[0-9]*$/ }) building

    @observable @fieldValid({ require: true, help: "不可为空" }) unit = []
}
