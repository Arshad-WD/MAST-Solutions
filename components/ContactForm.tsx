"use client";

import { useState } from "react";
import { SlideButton } from "@/components/ui/slide-button";


const SHEET_ENDPOINT = "https://script.google.com/macros/s/AKfycbw_WGs9W9E8oTXFyn9VTYheUi1FnrK_NFYQ_E4tOZGY-aWRiVRdwkhYer_PsmuChN5l/exec";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    country: "India",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSwipeComplete = async () => {
    // If fields are not valid, trigger native browser validation
    const form = document.getElementById("inquiry-form") as HTMLFormElement;
    if (form && !form.checkValidity()) {
      form.reportValidity();
      setStatus("idle"); // reset state
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      // Send as text/plain to avoid CORS preflight options issues in Google Apps Script
      const response = await fetch(SHEET_ENDPOINT as string, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok || response.status === 0) {
        setStatus("success");
        // Clear form fields
        setFormData({
          name: "",
          email: "",
          phone: "",
          state: "",
          country: "United States",
          message: "",
        });
      } else {
        const errorText = await response.text().catch(() => "No text");
        console.error("Fetch failed:", response.status, response.statusText, errorText, "Endpoint:", SHEET_ENDPOINT);
        throw new Error(`Unable to submit request: ${response.status} ${response.statusText}`);
      }
    } catch (error: any) {
      console.error("Form Submission Error:", error);
      setStatus("error");
      setErrorMessage(
        "Connection issue submitting inquiry. Please try again or email mast.automations@gmail.com directly."
      );
      
      // Reset button state after a short delay so the user can re-try
      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 border-t border-ink/10 relative bg-paper bg-grid-dots">
      {/* Decorative vertical lines */}
      <div className="absolute inset-y-0 left-8 border-l border-ink/5 pointer-events-none hidden md:block"></div>
      <div className="absolute inset-y-0 right-8 border-l border-ink/5 pointer-events-none hidden md:block"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Form Metadata Copy */}
          <div className="lg:col-span-5 flex flex-col space-y-6 lg:sticky lg:top-32">
            <h2 
              data-toc-title="Contact Us"
              className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-ink"
            >
              Start a project.
            </h2>
            <p className="text-sm md:text-base text-muted leading-relaxed max-w-md">
              Share your details below and we'll get back to you shortly.
            </p>
            <div className="pt-6 border-t border-ink/10 flex flex-col space-y-2">
              <a
                href="mailto:mast.automations@gmail.com"
                className="font-serif text-xl md:text-2xl text-ink hover:text-accent transition-colors duration-250"
              >
                mast.automations@gmail.com
              </a>
            </div>
          </div>

          {/* Form Specs Window */}
          <div className="lg:col-span-7 bg-[#FAF8F5] border border-ink/12 p-8 md:p-12 shadow-sm relative rounded-lg">
            
            {/* Window Decor */}
            <div className="absolute top-3 right-4 text-[8px] font-mono text-muted/50 uppercase tracking-widest">PROJECT BRIEF</div>
            
            {status === "success" && (
              <div className="absolute inset-0 bg-[#FAF8F5] z-10 flex flex-col items-center justify-center p-8 text-center animate-fade-in-up">
                <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 mb-6 border border-green-500/25">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-3xl text-ink mb-2">Message Sent.</h3>
                <p className="text-xs md:text-sm text-muted max-w-sm">
                  Your inquiry has been sent successfully. We will reach out to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-xs font-mono uppercase tracking-widest text-accent hover:text-accent-hover transition-colors underline focus:outline-none"
                >
                  Send another inquiry
                </button>
              </div>
            )}

            <form
              id="inquiry-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleSwipeComplete();
              }}
              className="space-y-8"
            >
              {status === "error" && (
                <div className="p-4 bg-red-500/5 border-l-2 border-red-500 text-red-600 text-xs font-mono leading-relaxed animate-fade-in-up">
                  ERROR: {errorMessage}
                </div>
              )}

              {/* Full Name */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="name" className="text-xs font-medium text-ink">
                  Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-white border border-ink/10 rounded-xl px-4 py-3 text-ink text-sm placeholder:text-ink/30 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all shadow-sm font-sans"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="email" className="text-xs font-medium text-ink">
                    Email Address <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="w-full bg-white border border-ink/10 rounded-xl px-4 py-3 text-ink text-sm placeholder:text-ink/30 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all shadow-sm font-sans"
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-medium text-ink">
                    Phone Number <span className="text-accent">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+1 555-0199"
                    className="w-full bg-white border border-ink/10 rounded-xl px-4 py-3 text-ink text-sm placeholder:text-ink/30 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all shadow-sm font-sans"
                  />
                </div>
              </div>

              {/* State & Country */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="state" className="text-xs font-medium text-ink">
                    State / Region
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="California"
                    className="w-full bg-white border border-ink/10 rounded-xl px-4 py-3 text-ink text-sm placeholder:text-ink/30 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all shadow-sm font-sans"
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="country" className="text-xs font-medium text-ink">
                    Country
                  </label>
                  <div className="relative">
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full bg-white border border-ink/10 rounded-xl px-4 py-3 text-ink text-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all shadow-sm appearance-none pr-10 cursor-pointer font-sans"
                    >
                      <option value="United States">United States</option>
                      <option value="India">India</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="Germany">Germany</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-ink/40">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="message" className="text-xs font-medium text-ink">
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full bg-white border border-ink/10 rounded-xl px-4 py-3 text-ink text-sm placeholder:text-ink/30 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all shadow-sm resize-y font-sans"
                />
              </div>

              {/* Submit Slider */}
              <div className="pt-4 flex flex-col md:flex-row items-center md:justify-between gap-6">
                <div className="text-[10px] font-mono text-muted uppercase text-center md:text-left tracking-wide">
                  Slide button to submit your project brief directly
                </div>

                <div className="w-full md:w-auto">
                  <SlideButton
                    controlledStatus={status}
                    onSwipeComplete={handleSwipeComplete}
                  />
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

/*
-----------------------------------------------------------------------------
GOOGLE APPS SCRIPT CODE FOR SHEET INTEGRATION
-----------------------------------------------------------------------------
Deploy this code as a Web App to pipe contact requests directly to Google Sheets:

1. Open Google Drive. Create a new Google Sheet named "Mast Contact Inquiries".
2. Set up the header columns in Row 1:
   A1: Name
   B1: Email
   C1: Phone
   D1: State
   E1: Country
   F1: Message
   G1: Timestamp
   H1: Contacted
3. From the Sheet, click on "Extensions" -> "Apps Script".
4. Delete all default code in the script editor and paste the code below:

```javascript
function doPost(e) {
  try {
    // Parse incoming JSON data
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Append fields in order: Name, Email, Phone, State, Country, Message, Timestamp, Contacted
    sheet.appendRow([
      data.name || "",
      data.email || "",
      data.phone || "",
      data.state || "",
      data.country || "",
      data.message || "",
      new Date(), // Current Date/Time
      "No"        // Default status for manual tracking
    ]);
    
    // Return standard success response with CORS headers
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*");
  } catch (error) {
    // Return standard error response with CORS headers
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*");
  }
}

// Handle CORS preflight options requests
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
    .setHeader("Access-Control-Allow-Headers", "Content-Type");
}
```

5. Click the "Save" icon.
6. Click "Deploy" -> "New deployment" at the top-right.
7. Select deployment type "Web app" (click the gear icon to select).
8. Configure:
   - Description: "Mast Inquiry API"
   - Execute as: "Me (your-google-account@gmail.com)"
   - Who has access: "Anyone"
9. Click "Deploy". Grant the script permissions to edit your Google Sheet when prompted.
10. Copy the "Web app URL" from the success dialog.
11. Paste this URL into the `SHEET_ENDPOINT` constant at the top of this component (replacing "YOUR_APPS_SCRIPT_URL_HERE").
-----------------------------------------------------------------------------
*/
