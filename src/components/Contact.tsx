import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState, FormEvent } from "react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    country: "",
    productInterest: "",
    quantity: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.companyName || !formData.contactPerson || !formData.email || !formData.country) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields marked with *",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          companyName: formData.companyName,
          contactPerson: formData.contactPerson,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          product: formData.productInterest,
          quantity: formData.quantity,
          message: formData.message,
        },
      });

      if (error) throw error;

      toast({
        title: "Inquiry Sent Successfully",
        description: "We'll get back to you within 24 hours!",
      });

      // Clear form
      setFormData({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        country: "",
        productInterest: "",
        quantity: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Error sending inquiry:", error);
      toast({
        title: "Error Sending Inquiry",
        description: "Please try again later or contact us directly at export02@sunsmitdyechem.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your chemical requirements? Get in touch with our export team 
            for competitive quotes and expert guidance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Head Office</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    707 Mauryansh Ellanza,<br />
                    Nr. Parekhs Hospital,<br />
                    Shymal Cross Roads,<br />
                    Gujarat – 380015
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-secondary" />
                    <span>Plant Office</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    3455, G.I.D.C. Industrial Area,<br />
                    Nr. MJ Pharma, Ankleshwar, Gujarat – 393002<br />
                    Dist. Bharuch, Gujarat
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>Inquiries</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">shashwat@sunsmitdyechem.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">+91 9825030377</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-secondary" />
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Saturday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Get Quote</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and our export team will respond within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Company Name *
                      </label>
                      <Input 
                        placeholder="Your Company Name" 
                        value={formData.companyName}
                        onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Contact Person *
                      </label>
                      <Input 
                        placeholder="Your Name" 
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email Address *
                      </label>
                      <Input 
                        type="email" 
                        placeholder="your@email.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Phone Number
                      </label>
                      <Input 
                        placeholder="+91 98765 43210" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Country *
                      </label>
                      <Input 
                        placeholder="Your Country" 
                        value={formData.country}
                        onChange={(e) => setFormData({...formData, country: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Product Interest
                      </label>
                      <select 
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                        value={formData.productInterest}
                        onChange={(e) => setFormData({...formData, productInterest: e.target.value})}
                      >
                        <option>Select Product</option>
                        <option>Sodium Hypochlorite</option>
                        <option>Calcium Hypochlorite</option>
                        <option>Specialty Intermediates</option>
                        <option>Custom Requirements</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Quantity Required
                    </label>
                    <Input 
                      placeholder="e.g., 100 MT per month" 
                      value={formData.quantity}
                      onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Please provide details about your requirements, specifications, and any other relevant information..." 
                      className="min-h-[120px]" 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Enquiry"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;