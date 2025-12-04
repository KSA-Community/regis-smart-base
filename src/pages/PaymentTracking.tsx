import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  CreditCard, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Receipt
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const paymentHistory = [
  { id: "PAY001", type: "Tuition Fee", amount: 50000, date: "2025-01-15", status: "paid" },
  { id: "PAY002", type: "Bus Service", amount: 15000, date: "2025-01-15", status: "paid" },
  { id: "PAY003", type: "Uniform", amount: 8000, date: "2025-02-01", status: "paid" },
  { id: "PAY004", type: "Books & Materials", amount: 12000, date: "2025-02-10", status: "pending" },
  { id: "PAY005", type: "Extracurricular", amount: 5000, date: "2025-03-01", status: "overdue" },
];

const PaymentTracking = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredPayments = paymentHistory.filter(p => 
    p.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "paid":
        return <Badge className="bg-secondary text-secondary-foreground"><CheckCircle className="w-3 h-3 mr-1" /> Paid</Badge>;
      case "pending":
        return <Badge variant="outline" className="text-accent border-accent"><Clock className="w-3 h-3 mr-1" /> Pending</Badge>;
      case "overdue":
        return <Badge variant="destructive"><AlertCircle className="w-3 h-3 mr-1" /> Overdue</Badge>;
      default:
        return null;
    }
  };

  const totalPaid = paymentHistory.filter(p => p.status === "paid").reduce((sum, p) => sum + p.amount, 0);
  const totalPending = paymentHistory.filter(p => p.status !== "paid").reduce((sum, p) => sum + p.amount, 0);

  return (
    <>
      <Helmet>
        <title>Payment Tracking - King Standard Academy</title>
        <meta name="description" content="Track tuition fees, payments, and financial records at KSA." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-gold text-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 bg-white/40 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
                Finance Management
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Payment Tracking</h1>
              <p className="text-lg text-foreground/80">
                Monitor all payments, view history, and track outstanding fees easily.
              </p>
            </div>
          </div>
        </section>

        {/* Summary Cards */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-4">
              <Card className="glass-card p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Paid</p>
                    <p className="text-2xl font-bold text-foreground">{totalPaid.toLocaleString()} FCFA</p>
                  </div>
                </div>
              </Card>
              <Card className="glass-card p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Outstanding</p>
                    <p className="text-2xl font-bold text-foreground">{totalPending.toLocaleString()} FCFA</p>
                  </div>
                </div>
              </Card>
              <Card className="glass-card p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Receipt className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Transactions</p>
                    <p className="text-2xl font-bold text-foreground">{paymentHistory.length}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Search & Payments */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Search */}
            <div className="glass-card p-6 mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Search by payment type or ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Search
                </Button>
              </div>
            </div>

            {/* Payment List */}
            <Card className="glass-card overflow-hidden">
              <div className="p-6 border-b border-border">
                <h2 className="text-xl font-semibold text-foreground">Payment History</h2>
              </div>
              <div className="divide-y divide-border">
                {filteredPayments.map((payment) => (
                  <div key={payment.id} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-muted/30 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <CreditCard className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{payment.type}</p>
                        <p className="text-sm text-muted-foreground">{payment.id} • {payment.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 sm:text-right">
                      <div>
                        <p className="font-bold text-foreground">{payment.amount.toLocaleString()} FCFA</p>
                        {getStatusBadge(payment.status)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PaymentTracking;
