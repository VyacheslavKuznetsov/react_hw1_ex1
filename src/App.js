import logo from './logo.svg';
import './App.css';
import { Layout } from 'antd';
import { Button } from 'antd';

const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <Layout>
      <Header><b>Что понравилось в первом уроке</b></Header>
      <Content>
        <Button type="primary">Понравилось все</Button>
      </Content>
      <Footer>Ай-Теко</Footer>
    </Layout>
  );
}

export default App;
