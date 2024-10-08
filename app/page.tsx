import type { Metadata } from "next";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Hello world - UI template",
};

export default function Home() {
  return (
    <>
      <Header />
      <div className="nhsuk-width-container">
        <main className="nhsuk-main-wrapper" id="maincontent" role="main">
          <h1>Hello world</h1>
        </main>
      </div>
      <Footer />
    </>
  );
}
