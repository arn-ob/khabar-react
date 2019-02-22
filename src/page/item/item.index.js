import React, {Component} from 'react'
import { Layout, Menu, Breadcrumb, Row, Col, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Content, Footer } = Layout;

export default class ItemPage extends Component {
    constructor(props){
        super(props);
        this.state ={
            insertItem: true,
            viewItem: false
        }
    }

    handleAddItem = () => {
        if(this.state.insertItem){
            this.setState({insertItem: false});
        } else {
            this.setState({insertItem: true});
        }
        this.setState({viewItem: false})
    }

    handleViewItem = () =>{
        if(this.state.viewItem){
            this.setState({viewItem: false});
        } else{
            this.setState({viewItem: true});
        }
        this.setState({insertItem: false});
    }

    render(){
        return(
            <div>
            <Layout className="layout">
            <Content style={{ padding: '0 50px', height:800 }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <Row>
                    <Col span={6}>
                        <Menu
                            onClick={this.handleClick}
                            style={{ width: 256 }}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                            <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>Item Navigation</span></span>}>
                                <Menu.Item key="1" onClick={this.handleAddItem.bind(this)}>Inset Item</Menu.Item>
                                <Menu.Item key="2" onClick={this.handleViewItem.bind(this)}>View Item</Menu.Item>
                            </SubMenu>
                            
                        </Menu>
                    </Col>
                    <Col span={12}>
                        <div hidden={!this.state.insertItem}>
                            
                        
                        </div>
                        <div hidden={!this.state.viewItem}>View Item</div>
                    </Col>
                </Row>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center', background: '#fff', }}>
                Khabar Made By Khaua Daua
            </Footer>
        </Layout>
            </div>
        )
    }
}