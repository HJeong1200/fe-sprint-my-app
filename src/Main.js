import TodoList from "./components/TodoList";
import MyCalendar from "./components/Calendar";
import Clock from "./components/Clock";
import Weather from "./components/Weather";

const Main = function () {
  return (
    <main>
      <div className="margin"></div>
      <section className="left">
        <section className="clock-section">
          <Clock />
        </section>
        <section className="weather-section">
          <Weather />
        </section>
        <section className="calendar-section">
          <MyCalendar />
        </section>
      </section>
      <div className="divider"></div>
      <section className="right">
        <h2>⭐️ My To Do List</h2>
        <TodoList />
      </section>
      <div className="margin"></div>
    </main>
  );
};

export default Main;
