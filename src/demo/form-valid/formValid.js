import React from 'react'
import { Form, Row, Col, Select, Button, Input } from 'antd'
import { observer } from "mobx-react"
const FormItem = Form.Item
const Option = Select.Option
import Store from './formValidStore'

@observer
export default class extends React.Component {

    componentWillMount() {
        this.store = new Store()
        setTimeout(() => { this.store.ready = true }, 2000)
    }

    render() {
        console.info("render")
        let config = {
            labelCol: {
                span: 12
            },
            hasFeedback: true,
            wrapperCol: {
                span: 12
            }
        }
        let valid = this.store.getValidation()
        return (
            <Form style={{ padding: "100px 0 0 100px" }}>
                <Row gutter={24}>
                    <Col span={6}>
                        <Button disabled={!valid.classValid}>提交</Button>
                    </Col>
                    <Col span={6}>
                        <FormItem label="楼盘"{...config}
                            validateStatus={valid.resblock.valid == true ? "success" : "error"}
                            help={valid.resblock.help}>
                            <Input onChange={e => this.store.resblock = e.target.value} />
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem label="楼幢" {...config}
                            validateStatus={valid.building.valid == true ? "success" : "error"}
                            help={valid.building.help}>
                            <Input onChange={e => this.store.building = e.target.value} />
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem label="单元" {...config}
                            validateStatus={valid.unit.valid == true ? "success" : "error"}
                            help={valid.unit.help}>
                            <Select mode="multiple"
                                onChange={e => this.store.unit = e}>
                                <Option value="jack1">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="disabled">Disabled</Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                        </FormItem>
                    </Col>
                </Row>
            </Form>
        )
    }
}