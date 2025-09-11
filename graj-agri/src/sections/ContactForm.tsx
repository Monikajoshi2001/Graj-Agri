import { useState, useId } from "react";
import { User, Mail, Phone } from "lucide-react";
import Button from "../components/Button";
import InputField from "../components/InputField";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState("");
  const fieldId = useId(); // unique IDs for labels

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (field === "email") setError("");
  };

  const generateBody = () => {
    const { firstName, lastName, phone } = form;
    let body = `Hello,\n\n{ Add your query here }\n\n`;

    if (firstName || lastName || phone) {
      body += "My details:\n";
      body += `Email: ${form.email}\n`;
      if (firstName || lastName)
        body += `Name: ${firstName} ${lastName}`.trim() + "\n";
      if (phone) body += `Phone: ${phone}\n`;
      body += "\n";
    }

    body += "Please get back to me at your earliest convenience.\n\n";
    body += `Best regards,\n${firstName || ""} ${lastName || ""}`.trim();

    return encodeURIComponent(body);
  };

  const handleSubmit = () => {
    if (!form.email.trim()) {
      setError("Email is required");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address");
      return;
    }

    const toEmail = "heaven@earth.com"; // default "To" email
    const subject = encodeURIComponent("Inquiry from Contact Form");
    const body = generateBody();

    window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
  };



  return (
    <section id="contact">

      <div className="min-h-screen w-full bg-[url(/contact_bg.png)] bg-cover bg-center relative">
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-tight">
                Email us for queries and purchase
              </h1>
            </div>

            {/* Right - Form */}
            <form
              className="w-full max-w-md mx-auto lg:mx-0 space-y-2"
              action={handleSubmit}
            >
              <InputField
                icon={<User size={20} />}
                label="First Name"
                type="text"
                field="firstName"
                form={form}
                fieldId={fieldId}
                error={error}
                handleChange={handleChange}
              />
              <InputField
                icon={<User size={20} />}
                label="Last Name"
                type="text"
                field="lastName"
                form={form}
                fieldId={fieldId}
                error={error}
                handleChange={handleChange}
              />
              <InputField
                icon={<Mail size={20} />}
                label="Email"
                type="email"
                field="email"
                required
                form={form}
                fieldId={fieldId}
                error={error}
                handleChange={handleChange}
              />
              <InputField
                icon={<Phone size={20} />}
                label="Phone"
                type="tel"
                field="phone"
                form={form}
                fieldId={fieldId}
                error={error}
                handleChange={handleChange}
              />

              <Button type="submit" className="w-full py-3 mt-5 rounded-xl">
                SUBMIT
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
