import { Card, Col, Row } from "antd";

const Featured = () => (
	<>
		<h2>featured</h2>
		<Row gutter={16}>
			<Col span={8}>
				<Card title="Card title" bordered={false}>
					Card content
				</Card>
			</Col>
			<Col span={8}>
				<Card title="Card title" bordered={false}>
					Card content
				</Card>
			</Col>
			<Col span={8}>
				<Card title="Card title" bordered={false}>
					Card content
				</Card>
			</Col>
		</Row>
	</>
);

export default Featured;
