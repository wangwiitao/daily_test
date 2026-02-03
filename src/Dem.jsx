import React, { useState } from "react";
import {
  Card,
  Table,
  Tag,
  Row,
  Col,
  Progress,
  Typography,
  Space,
  Button,
  Collapse,
  Divider,
  Select,
  DatePicker,
  Radio,
  Tooltip,
  Badge,
  Tabs,
} from "antd";
import {
  FilterOutlined,
  ExpandOutlined,
  CalendarOutlined,
  LineChartOutlined,
  InfoCircleOutlined,
  DownOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Column } from "@ant-design/charts";

const { Title, Text } = Typography;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { Panel } = Collapse;
const { TabPane } = Tabs;

const SilviculturePlanting = () => {
  const [activeTab, setActiveTab] = useState("All BU");
  const [expandedFilters, setExpandedFilters] = useState(false);
  const [timeMethod, setTimeMethod] = useState("Manual");
  const [selectedRegion, setSelectedRegion] = useState("All Region");
  const [selectedDistrict, setSelectedDistrict] = useState("All District");

  // 表格数据
  const dataSource = [
    {
      key: "1",
      serial: 1,
      spk: "5122732502",
      timeDuration: 0.89,
      bu: "Palembang",
      region: "Palembang P1",
      district: "D.",
    },
    {
      key: "2",
      serial: 2,
      spk: "5122696020",
      timeDuration: 0.68,
      bu: "Palembang",
      region: "Palembang P1",
      district: "D.SIMP.",
    },
    {
      key: "3",
      serial: 3,
      spk: "5122715557",
      timeDuration: 0.55,
      bu: "Jambi",
      region: "Jambi",
      district: "",
    },
  ];

  // 表格列定义
  const columns = [
    {
      title: "Seria...",
      dataIndex: "serial",
      key: "serial",
      width: 80,
      align: "center",
    },
    {
      title: "SPK",
      dataIndex: "spk",
      key: "spk",
      width: 120,
    },
    {
      title: "Time Duration",
      dataIndex: "timeDuration",
      key: "timeDuration",
      render: (value) => (
        <Tag
          color={value > 0.8 ? "red" : value > 0.6 ? "orange" : "green"}
          style={{ margin: 0 }}
        >
          {value} Day/Ha
        </Tag>
      ),
      width: 120,
      align: "center",
    },
    {
      title: "Bu",
      dataIndex: "bu",
      key: "bu",
      width: 100,
    },
    {
      title: "Region",
      dataIndex: "region",
      key: "region",
      width: 120,
    },
    {
      title: "District",
      dataIndex: "district",
      key: "district",
      width: 100,
      render: (text) => text || "-",
    },
  ];

  // 时间对比数据 - 用于柱状图
  const manualData = [
    { region: "Kalbar", value: 0.89, type: "Manual" },
    { region: "Palembang", value: 0.75, type: "Manual" },
    { region: "Riau", value: 0.65, type: "Manual" },
    { region: "Jambi", value: 0.55, type: "Manual" },
    { region: "Kaleng", value: 0.7, type: "Manual" },
  ];

  const machineData = [
    { region: "Kalbar", value: 0.45, type: "Machine" },
    { region: "Palembang", value: 0.38, type: "Machine" },
    { region: "Riau", value: 0.42, type: "Machine" },
    { region: "Jambi", value: 0.35, type: "Machine" },
    { region: "Kaleng", value: 0.4, type: "Machine" },
  ];

  // 柱状图配置 - 更细的柱子
  const getColumnConfig = (data) => ({
    data,
    xField: "region",
    yField: "value",
    seriesField: "type",
    color: timeMethod === "Manual" ? "#1890ff" : "#52c41a",
    legend: false,
    yAxis: {
      label: {
        formatter: (v) => `${v} Day/Ha`,
      },
      grid: {
        line: {
          style: {
            stroke: "#f0f0f0",
            lineDash: [4, 4],
          },
        },
      },
      min: 0,
      max: 1.0,
    },
    xAxis: {
      label: {
        style: {
          fontSize: 12,
        },
      },
    },
    label: {
      position: "top",
      style: {
        fill: "#262626",
        fontSize: 12,
      },
      formatter: (datum) => `${datum.value} Day/Ha`,
    },
    // 设置更细的柱子
    columnWidthRatio: 0.3,
    columnStyle: {
      radius: [4, 4, 0, 0],
    },
    height: 200,
    style: {
      marginTop: "16px",
    },
  });

  // 筛选器数量
  const filterCount = 0;
  const totalFilters = 6;

  // BU选项
  const buOptions = [
    { value: "all", label: "All BU" },
    { value: "palembang", label: "Palembang" },
    { value: "jambi", label: "Jambi" },
    { value: "riau", label: "Riau" },
    { value: "kalbar", label: "Kalbar" },
  ];

  // Region选项
  const regionOptions = [
    { value: "all", label: "All Region" },
    { value: "palembang-p1", label: "Palembang P1" },
    { value: "jambi", label: "Jambi" },
  ];

  // District选项
  const districtOptions = [
    { value: "all", label: "All District" },
    { value: "d", label: "D." },
    { value: "dsimp", label: "D.SIMP." },
  ];

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      {/* 标题 */}
      <Card
        style={{
          marginBottom: 20,
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
        }}
        bodyStyle={{ padding: "16px 24px" }}
      >
        <Title
          level={2}
          style={{
            margin: 0,
            fontSize: "24px",
            fontWeight: 600,
            color: "#262626",
          }}
        >
          Silviculture-Planting
        </Title>
      </Card>

      {/* Tabs选择器卡片 */}
      <Card
        style={{
          marginBottom: 20,
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
        }}
        bodyStyle={{ padding: "0" }}
      >
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          style={{ padding: "0 16px" }}
          size="large"
        >
          <TabPane tab="All BU" key="All BU" />
          <TabPane tab="All Region" key="All Region" />
          <TabPane tab="All District" key="All District" />
        </Tabs>
      </Card>

      {/* 筛选器选择器 */}
      <Card
        style={{
          marginBottom: 20,
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
        }}
        bodyStyle={{ padding: "16px 24px" }}
      >
        <Row gutter={[16, 16]} align="middle">
          <Col flex="none">
            <Space>
              <Text strong style={{ color: "#262626" }}>
                Filter by:
              </Text>
            </Space>
          </Col>

          <Col flex="auto">
            <Row gutter={16}>
              <Col span={8}>
                <Select
                  style={{ width: "100%" }}
                  placeholder="Select BU"
                  value={
                    activeTab === "All BU" ? "all" : activeTab.toLowerCase()
                  }
                  onChange={(value) =>
                    setActiveTab(
                      value === "all"
                        ? "All BU"
                        : value.charAt(0).toUpperCase() + value.slice(1),
                    )
                  }
                  suffixIcon={<DownOutlined />}
                >
                  {buOptions.map((option) => (
                    <Option key={option.value} value={option.value}>
                      {option.label}
                    </Option>
                  ))}
                </Select>
              </Col>

              <Col span={8}>
                <Select
                  style={{ width: "100%" }}
                  placeholder="Select Region"
                  value={selectedRegion}
                  onChange={setSelectedRegion}
                  suffixIcon={<DownOutlined />}
                >
                  {regionOptions.map((option) => (
                    <Option key={option.value} value={option.value}>
                      {option.label}
                    </Option>
                  ))}
                </Select>
              </Col>

              <Col span={8}>
                <Select
                  style={{ width: "100%" }}
                  placeholder="Select District"
                  value={selectedDistrict}
                  onChange={setSelectedDistrict}
                  suffixIcon={<DownOutlined />}
                >
                  {districtOptions.map((option) => (
                    <Option key={option.value} value={option.value}>
                      {option.label}
                    </Option>
                  ))}
                </Select>
              </Col>
            </Row>
          </Col>

          <Col flex="none">
            <Space>
              <Tooltip title="Reset filters">
                <Button type="text" icon={<FilterOutlined />}>
                  Reset
                </Button>
              </Tooltip>
              <Tooltip title="Settings">
                <Button type="text" icon={<SettingOutlined />} />
              </Tooltip>
            </Space>
          </Col>
        </Row>
      </Card>

      <Row gutter={[20, 20]}>
        {/* 左侧区域 - 主内容 */}
        <Col span={16}>
          <Row gutter={[0, 20]} style={{ height: "100%" }}>
            {/* 指标卡片 */}
            <Col span={24}>
              <Row gutter={20}>
                <Col span={12}>
                  <Card
                    title="Standard Stocking"
                    style={{ borderRadius: "8px", height: "100%" }}
                  >
                    <div style={{ marginTop: 8 }}>
                      <div style={{ marginBottom: 12 }}>
                        <Text
                          strong
                          style={{ fontSize: "24px", color: "#262626" }}
                        >
                          85%
                        </Text>
                      </div>
                      <Progress
                        percent={85}
                        strokeColor="#52c41a"
                        showInfo={false}
                        size="small"
                        strokeWidth={8}
                      />
                      <div style={{ marginTop: 8 }}>
                        <Text type="secondary" style={{ fontSize: "12px" }}>
                          Current Stocking Level
                        </Text>
                      </div>
                    </div>
                  </Card>
                </Col>

                <Col span={12}>
                  <Card
                    title="Road Availability"
                    style={{ borderRadius: "8px", height: "100%" }}
                  >
                    <div style={{ marginTop: 8 }}>
                      <div style={{ marginBottom: 12 }}>
                        <Text
                          strong
                          style={{ fontSize: "24px", color: "#262626" }}
                        >
                          92%
                        </Text>
                      </div>
                      <Progress
                        percent={92}
                        strokeColor="#1890ff"
                        showInfo={false}
                        size="small"
                        strokeWidth={8}
                      />
                      <div style={{ marginTop: 8 }}>
                        <Text type="secondary" style={{ fontSize: "12px" }}>
                          Accessible Roads
                        </Text>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Col>

            {/* 时间对比柱状图 */}
            <Col span={24}>
              <Card
                title={
                  <Space>
                    <LineChartOutlined />
                    <span>Time Duration Compare</span>
                  </Space>
                }
                style={{ borderRadius: "8px" }}
                extra={
                  <Radio.Group
                    value={timeMethod}
                    onChange={(e) => setTimeMethod(e.target.value)}
                    size="small"
                    buttonStyle="solid"
                  >
                    <Radio.Button value="Manual">Manual</Radio.Button>
                    <Radio.Button value="Machine">Machine</Radio.Button>
                    <Radio.Button value="Product">Product</Radio.Button>
                  </Radio.Group>
                }
              >
                {/* 柱状图 */}
                <div style={{ marginTop: 8 }}>
                  <Text
                    strong
                    style={{
                      display: "block",
                      marginBottom: 16,
                      color: "#262626",
                    }}
                  >
                    {timeMethod}
                  </Text>
                  <Column
                    {...getColumnConfig(
                      timeMethod === "Manual" ? manualData : machineData,
                    )}
                  />
                </div>

                {/* 区域数值列表 */}
                <div style={{ marginTop: 24 }}>
                  <Row gutter={[8, 8]}>
                    {(timeMethod === "Manual" ? manualData : machineData).map(
                      (item, index) => (
                        <Col span={24} key={index}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              padding: "8px 12px",
                              backgroundColor:
                                index % 2 === 0 ? "#fafafa" : "transparent",
                              borderRadius: "4px",
                            }}
                          >
                            <Text style={{ fontSize: "14px" }}>
                              {item.region}
                            </Text>
                            <Text strong style={{ fontSize: "14px" }}>
                              {item.value} Day/Ha
                            </Text>
                          </div>
                        </Col>
                      ),
                    )}
                  </Row>
                </div>
              </Card>
            </Col>

            {/* 数据表格 */}
            <Col span={24}>
              <Card
                style={{
                  borderRadius: "8px",
                  height: "100%",
                }}
                bodyStyle={{ padding: 0 }}
              >
                <div style={{ overflow: "auto" }}>
                  <Table
                    dataSource={dataSource}
                    columns={columns}
                    pagination={false}
                    size="small"
                    bordered={false}
                  />
                </div>
              </Card>
            </Col>
          </Row>
        </Col>

        {/* 右侧侧边栏 */}
        <Col span={8}>
          {/* 筛选器面板 */}
          <Card
            title={
              <Space>
                <FilterOutlined style={{ color: "#8c8c8c" }} />
                <Text strong>Expand for more filters</Text>
              </Space>
            }
            extra={
              <Badge
                count={`${filterCount}/${totalFilters}`}
                style={{ backgroundColor: "#f0f0f0", color: "#8c8c8c" }}
              />
            }
            style={{ borderRadius: "8px" }}
            bodyStyle={{ padding: "16px" }}
          >
            <Collapse
              bordered={false}
              activeKey={expandedFilters ? ["1"] : []}
              onChange={(keys) => setExpandedFilters(keys.length > 0)}
              expandIconPosition="end"
              expandIcon={({ isActive }) => (
                <ExpandOutlined rotate={isActive ? 180 : 0} />
              )}
            >
              <Panel
                key="1"
                header={
                  <span style={{ color: "#8c8c8c" }}>
                    Click to expand filters
                  </span>
                }
                style={{ border: "none" }}
              >
                <Space
                  direction="vertical"
                  style={{ width: "100%", marginTop: 16 }}
                >
                  <div>
                    <Text
                      strong
                      style={{
                        display: "block",
                        marginBottom: 8,
                        fontSize: "14px",
                      }}
                    >
                      Time Duration
                    </Text>
                    <Select
                      style={{ width: "100%" }}
                      defaultValue="manual"
                      size="middle"
                      suffixIcon={<DownOutlined />}
                    >
                      <Option value="manual">Manual</Option>
                      <Option value="machine">Machine</Option>
                      <Option value="product">Product</Option>
                    </Select>
                  </div>

                  <div>
                    <Text
                      strong
                      style={{
                        display: "block",
                        marginBottom: 8,
                        fontSize: "14px",
                      }}
                    >
                      0.55 Day/Ha
                    </Text>
                    <Select
                      style={{ width: "100%" }}
                      placeholder="Select value"
                      size="middle"
                      suffixIcon={<DownOutlined />}
                    >
                      <Option value="0.55">0.55 Day/Ha</Option>
                      <Option value="0.68">0.68 Day/Ha</Option>
                      <Option value="0.89">0.89 Day/Ha</Option>
                    </Select>
                  </div>

                  <div>
                    <Text
                      strong
                      style={{
                        display: "block",
                        marginBottom: 8,
                        fontSize: "14px",
                      }}
                    >
                      Machine
                    </Text>
                    <Select
                      style={{ width: "100%" }}
                      placeholder="Select machine"
                      size="middle"
                      suffixIcon={<DownOutlined />}
                    >
                      <Option value="excavator">Excavator</Option>
                      <Option value="bulldozer">Bulldozer</Option>
                      <Option value="planter">Planter</Option>
                    </Select>
                  </div>

                  <div>
                    <Text
                      strong
                      style={{
                        display: "block",
                        marginBottom: 8,
                        fontSize: "14px",
                      }}
                    >
                      Product
                    </Text>
                    <Select
                      style={{ width: "100%" }}
                      placeholder="Select product"
                      size="middle"
                      suffixIcon={<DownOutlined />}
                    >
                      <Option value="palm-oil">Palm Oil</Option>
                      <Option value="rubber">Rubber</Option>
                      <Option value="timber">Timber</Option>
                    </Select>
                  </div>

                  <div>
                    <Text
                      strong
                      style={{
                        display: "block",
                        marginBottom: 8,
                        fontSize: "14px",
                      }}
                    >
                      Machine
                    </Text>
                    <Select
                      style={{ width: "100%" }}
                      placeholder="Select machine type"
                      size="middle"
                      suffixIcon={<DownOutlined />}
                    >
                      <Option value="type-a">Type A</Option>
                      <Option value="type-b">Type B</Option>
                      <Option value="type-c">Type C</Option>
                    </Select>
                  </div>

                  <div>
                    <Text
                      strong
                      style={{
                        display: "block",
                        marginBottom: 8,
                        fontSize: "14px",
                      }}
                    >
                      Date Range
                    </Text>
                    <RangePicker style={{ width: "100%" }} size="middle" />
                  </div>

                  <Button
                    type="primary"
                    block
                    size="middle"
                    style={{ marginTop: 16 }}
                    onClick={() => console.log("Filters applied")}
                  >
                    Apply Filters
                  </Button>
                </Space>
              </Panel>
            </Collapse>
          </Card>

          {/* 统计分析 */}
          <Card
            style={{
              borderRadius: "8px",
              marginTop: 20,
            }}
            bodyStyle={{ padding: "16px" }}
          >
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              <div>
                <Text
                  strong
                  style={{
                    display: "block",
                    marginBottom: 12,
                    fontSize: "16px",
                  }}
                >
                  <InfoCircleOutlined style={{ marginRight: 8 }} />
                  Performance Analysis
                </Text>
                <div
                  style={{
                    padding: 12,
                    backgroundColor: "#fff7e6",
                    borderRadius: "6px",
                    border: "1px solid #ffd591",
                    marginTop: 8,
                  }}
                >
                  <Text
                    style={{
                      color: "#d46b08",
                      fontSize: "13px",
                      lineHeight: 1.6,
                    }}
                  >
                    Exceeding the mean by 0.3016 days. This reflects the slowest
                    planting process under the Manual method, indicating
                    potential operational inefficiencies or constraints.
                  </Text>
                </div>
              </div>

              <Divider style={{ margin: "12px 0" }} />

              {/* 时间戳 */}
              <div>
                <Text
                  strong
                  style={{
                    display: "block",
                    marginBottom: 12,
                    fontSize: "14px",
                  }}
                >
                  Last Updated
                </Text>
                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: "100%" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "8px 12px",
                      backgroundColor: "#fafafa",
                      borderRadius: "4px",
                    }}
                  >
                    <CalendarOutlined
                      style={{ marginRight: 8, color: "#8c8c8c" }}
                    />
                    <Text style={{ fontSize: "13px" }}>
                      2025-11-07 17:53:07
                    </Text>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "4px 12px",
                      justifyContent: "center",
                    }}
                  >
                    <Text type="secondary" style={{ fontSize: "12px" }}>
                      test
                    </Text>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "8px 12px",
                      backgroundColor: "#fafafa",
                      borderRadius: "4px",
                    }}
                  >
                    <CalendarOutlined
                      style={{ marginRight: 8, color: "#8c8c8c" }}
                    />
                    <Text style={{ fontSize: "13px" }}>
                      2025-11-07 17:53:07
                    </Text>
                  </div>
                </Space>
              </div>

              {/* 扩展按钮 */}
              <Button
                type="dashed"
                block
                icon={<ExpandOutlined />}
                style={{ marginTop: 16 }}
                onClick={() => console.log("Expand clicked")}
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
