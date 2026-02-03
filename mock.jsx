import React, { useState } from 'react';
import { 
  Card, 
  Table, 
  Tag, 
  Tabs, 
  Row, 
  Col, 
  Progress, 
  Typography, 
  Space, 
  Button,
  Collapse,
  Divider,
  Select,
  DatePicker
} from 'antd';
import { 
  FilterOutlined, 
  ExpandOutlined, 
  CalendarOutlined,
  LineChartOutlined 
} from '@ant-design/icons';

const { Title, Text } = Typography;
const { TabPane } = Tabs;
const { Panel } = Collapse;
const { Option } = Select;
const { RangePicker } = DatePicker;

const SilviculturePlanting = () => {
  const [activeTab, setActiveTab] = useState('All BU');
  const [expandedFilters, setExpandedFilters] = useState(false);

  // 表格数据
  const dataSource = [
    {
      key: '1',
      serial: 1,
      spk: '5122732502',
      timeDuration: 0.89,
      bu: 'Palembang',
      region: 'Palembang P1',
      district: 'D.'
    },
    {
      key: '2',
      serial: 2,
      spk: '5122696020',
      timeDuration: 0.68,
      bu: 'Palembang',
      region: 'Palembang P1',
      district: 'D.SIMP.'
    },
    {
      key: '3',
      serial: 3,
      spk: '5122715557',
      timeDuration: 0.55,
      bu: 'Jambi',
      region: 'Jambi',
      district: ''
    }
  ];

  // 表格列定义
  const columns = [
    {
      title: 'Seria...',
      dataIndex: 'serial',
      key: 'serial',
      width: 80
    },
    {
      title: 'SPK',
      dataIndex: 'spk',
      key: 'spk',
      width: 120
    },
    {
      title: 'Time Duration',
      dataIndex: 'timeDuration',
      key: 'timeDuration',
      render: (value: number) => (
        <Tag color={value > 0.8 ? 'red' : value > 0.6 ? 'orange' : 'green'}>
          {value} Day/Ha
        </Tag>
      ),
      width: 120
    },
    {
      title: 'BU',
      dataIndex: 'bu',
      key: 'bu',
      width: 100
    },
    {
      title: 'Region',
      dataIndex: 'region',
      key: 'region',
      width: 120
    },
    {
      title: 'District',
      dataIndex: 'district',
      key: 'district',
      width: 100
    }
  ];

  // 时间对比数据
  const timeComparisonData = [
    { method: 'Manual', region: 'Kalbar', value: 0.89 },
    { method: 'Manual', region: 'Palembang', value: 0.75 },
    { method: 'Manual', region: 'Riau', value: 0.65 },
    { method: 'Manual', region: 'Jambi', value: 0.55 },
    { method: 'Manual', region: 'Kaleng', value: 0.70 }
  ];

  // 筛选器数量
  const filterCount = 0;
  const totalFilters = 6;

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f2f5' }}>
      {/* 标题 */}
      <Card 
        style={{ marginBottom: 20, backgroundColor: '#fff' }}
        bodyStyle={{ padding: '16px 24px' }}
      >
        <Title level={2} style={{ margin: 0 }}>
          Silviculture-Planting
        </Title>
      </Card>

      {/* 顶部标签页 */}
      <Card style={{ marginBottom: 20 }}>
        <Tabs 
          activeKey={activeTab} 
          onChange={setActiveTab}
          size="large"
        >
          <TabPane tab="All BU" key="All BU" />
          <TabPane tab="All Region" key="All Region" />
          <TabPane tab="All District" key="All District" />
        </Tabs>
      </Card>

      <Row gutter={[20, 20]}>
        {/* 左侧区域 */}
        <Col span={16}>
          {/* 标准种植和道路可用性 */}
          <Row gutter={[20, 20]}>
            <Col span={12}>
              <Card title="Standard Stocking" size="small">
                <div style={{ padding: '10px 0' }}>
                  <Progress 
                    percent={85} 
                    strokeColor="#52c41a"
                    format={() => '85%'}
                  />
                  <Text type="secondary">Current Stocking Level</Text>
                </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Road Availability" size="small">
                <div style={{ padding: '10px 0' }}>
                  <Progress 
                    percent={92} 
                    strokeColor="#1890ff"
                    format={() => '92%'}
                  />
                  <Text type="secondary">Accessible Roads</Text>
                </div>
              </Card>
            </Col>
          </Row>

          {/* 时间对比 */}
          <Card 
            title={
              <Space>
                <LineChartOutlined />
                <span>Time Duration Compare</span>
              </Space>
            }
            style={{ marginTop: 20 }}
          >
            <div style={{ marginBottom: 16 }}>
              <Text strong>Manual</Text>
              <div style={{ marginTop: 8 }}>
                {timeComparisonData.map((item, index) => (
                  <div key={index} style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    padding: '4px 0',
                    borderBottom: index < 4 ? '1px solid #f0f0f0' : 'none'
                  }}>
                    <Text>{item.region}</Text>
                    <Text>{item.value} Day/Ha</Text>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Text strong>Machine</Text>
              <Text type="secondary" style={{ marginLeft: 8 }}>Data not available</Text>
            </div>
          </Card>

          {/* 数据表格 */}
          <Card 
            style={{ marginTop: 20 }}
            bodyStyle={{ padding: 0 }}
          >
            <Table 
              dataSource={dataSource}
              columns={columns}
              pagination={false}
              size="small"
            />
          </Card>
        </Col>

        {/* 右侧区域 */}
        <Col span={8}>
          {/* 筛选器展开 */}
          <Card
            title={
              <Space>
                <FilterOutlined />
                <span>Filters</span>
                <Tag>{filterCount}/{totalFilters}</Tag>
              </Space>
            }
            extra={
              <Button 
                type="text" 
                icon={<ExpandOutlined />}
                onClick={() => setExpandedFilters(!expandedFilters)}
              />
            }
          >
            <Collapse 
              bordered={false}
              activeKey={expandedFilters ? ['1'] : []}
            >
              <Panel 
                header="Expand for more filters" 
                key="1"
                showArrow={false}
              >
                <Space direction="vertical" style={{ width: '100%' }}>
                  <div>
                    <Text strong>Time Duration</Text>
                    <div style={{ marginTop: 8 }}>
                      <Select style={{ width: '100%' }} defaultValue="manual">
                        <Option value="manual">Manual</Option>
                        <Option value="machine">Machine</Option>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Text strong>Product</Text>
                    <Select style={{ width: '100%' }} placeholder="Select product" />
                  </div>
                  
                  <div>
                    <Text strong>Date Range</Text>
                    <RangePicker style={{ width: '100%', marginTop: 8 }} />
                  </div>
                  
                  <Button type="primary" block>
                    Apply Filters
                  </Button>
                </Space>
              </Panel>
            </Collapse>
          </Card>

          {/* 统计分析 */}
          <Card 
            title="Performance Analysis"
            style={{ marginTop: 20 }}
          >
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <div>
                <Text strong>Manual Method Analysis</Text>
                <div style={{ marginTop: 8, padding: 12, backgroundColor: '#fff7e6', borderRadius: 6 }}>
                  <Text type="warning">
                    Exceeding the mean by 0.3016 days.
                    This reflects the slowest planting process under the Manual method, 
                    indicating potential operational inefficiencies or constraints.
                  </Text>
                </div>
              </div>

              <Divider />

              {/* 时间戳 */}
              <div>
                <Text strong>Last Updated</Text>
                <div style={{ marginTop: 8 }}>
                  <Space direction="vertical" size="small">
                    <div>
                      <CalendarOutlined style={{ marginRight: 8 }} />
                      <Text>2025-11-07 17:53:07</Text>
                    </div>
                    <div>
                      <Text type="secondary">test</Text>
                    </div>
                    <div>
                      <CalendarOutlined style={{ marginRight: 8 }} />
                      <Text>2025-11-07 17:53:07</Text>
                    </div>
                  </Space>
                </div>
              </div>

              {/* 扩展按钮 */}
              <Button 
                type="dashed" 
                block 
                icon={<ExpandOutlined />}
                onClick={() => console.log('Expand clicked')}
              >
                Expand
              </Button>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SilviculturePlanting;