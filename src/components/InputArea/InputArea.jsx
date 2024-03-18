import { Button, Col, Input, Row, Space, TreeSelect } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  handleTime,
  handleDate,
  handleStudents,
  handleSubject,
  handleSubmit,
  handleTeachers,
} from "../Slice/dataSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import tr from "date-fns/locale/tr";

function InputArea() {
  const students = useSelector((store) => store.data.students);
  const teachers = useSelector((store) => store.data.teachers);
  const selectedElements = useSelector((store) => store.data.selectedElements);
  const dispatch = useDispatch();
  return (
    <Row>
      <Col lg={6} xs={24}>
        <Space.Compact style={{ width: "85%" }}>
          <TreeSelect
            showSearch={true}
            style={{ width: "100%", textAlign: "start" }}
            dropdownStyle={{ maxHeight: 600, overflow: "auto" }}
            placeholder="Öğrenci Seçiniz"
            maxTagTextLength={500}
            allowClear
            multiple
            treeData={students}
            value={selectedElements.students}
            onChange={(newValue) => {
              dispatch(handleStudents(newValue));
            }}
          />
        </Space.Compact>
      </Col>
      <Col lg={6} xs={24}>
        <Space.Compact style={{ width: "85%" }}>
          <TreeSelect
            showSearch={true}
            style={{ width: "100%", textAlign: "start" }}
            dropdownStyle={{ maxHeight: 600, overflow: "auto" }}
            placeholder="Ders Seçiniz"
            maxTagTextLength={500}
            allowClear
            multiple
            treeData={teachers}
            value={selectedElements.teachers}
            onChange={(newValue) => {
              dispatch(handleTeachers(newValue));
            }}
          />
        </Space.Compact>
      </Col>
      <Col lg={5} xs={24}>
        <Row>
          <Col span={11}>
            <DatePicker
              selected={new Date()}
              onChange={(date) => {
                const formattedDate = date.toLocaleString("tr", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                });
                dispatch(handleDate(formattedDate));
              }}
              dateFormat=" dd / MM / yyyy"
              locale={tr}
              value={selectedElements.date}
              placeholderText="Tarih Seçiniz"
            />
          </Col>
          <Col span={11}>
            <DatePicker
              selected={new Date()}
              onChange={(date) => {
                const formattedDate = date.toLocaleString("tr", {
                  hour: "numeric",
                  minute: "numeric",
                });
                dispatch(handleTime(formattedDate));
              }}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={10}
              timeCaption="Saat"
              value={selectedElements.time}
              dateFormat="h:mm"
              placeholderText="Saat Seçiniz"
            />
          </Col>
        </Row>
      </Col>
      <Col lg={6} xs={24}>
        <Space.Compact style={{ width: "80%" }}>
          <Input
            placeholder="Ders Konusu Giriniz"
            onChange={(e) => {
              dispatch(handleSubject(e.target.value));
            }}
            value={selectedElements.subject}
          />
          <Button
            type="primary"
            onClick={() => {
              dispatch(handleSubmit());
            }}
          >
            Kaydet
          </Button>
        </Space.Compact>
      </Col>
    </Row>
  );
}

export default InputArea;
