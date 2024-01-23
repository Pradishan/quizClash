import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Chart from "chart.js/auto";

const BarGraph = () => {
  React.useEffect(() => {
    // Create the bar graph
    const ctx = document.getElementById("barGraph").getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Quiz 01",
          "Quiz 02",
          "Quiz 03",
          "Quiz 04",
          "Quiz 05",
          "Quiz 06",
          "Quiz 07",
          "Quiz 08",
          "Quiz 09",
          "Quiz 10",
          "Quiz 11",
          "Quiz 12",
        ],
        datasets: [
          {
            label: "Number of Users",
            data: [10, 15, 8, 12, 20, 18, 14, 17, 11, 13, 9, 16],
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 25,
            ticks: {
              stepSize: 5,
            },
          },
        },
      },
    });
  }, []);

  return (
    <Container >
      <Row>
        <Col>
          <div style={{ width: "100%" }}>
            <canvas
              id="barGraph"
              style={{ width: "100%", height: "250px" }}
            ></canvas>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BarGraph;
