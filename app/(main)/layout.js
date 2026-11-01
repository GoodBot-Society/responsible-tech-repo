import Footer from "../../components/Footer";


export default function MainLayout({ children }) {
  return (
    <div className={` relative flex min-h-screen flex-col min-h-screen bg-background font-sans antialiased`}>
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}