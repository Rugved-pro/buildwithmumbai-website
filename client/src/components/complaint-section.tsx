import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Upload, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const complaintFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  issueType: z.string().min(1, "Please select an issue type"),
  location: z.string().min(5, "Please provide a detailed location"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  consent: z.boolean().refine(val => val === true, "You must consent to data usage"),
});

type ComplaintFormData = z.infer<typeof complaintFormSchema>;

export default function ComplaintSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const form = useForm<ComplaintFormData>({
    resolver: zodResolver(complaintFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      issueType: "",
      location: "",
      description: "",
      consent: false,
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const onSubmit = async (data: ComplaintFormData) => {
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      formData.append("name", data.fullName);
      formData.append("email", data.email);
      formData.append("issue_type", data.issueType);
      formData.append("location", data.location);
      formData.append("description", data.description);
      formData.append("_captcha", "false");
      formData.append("_next", `${window.location.origin}/thank-you`);
      
      if (selectedFile) {
        formData.append("attachment", selectedFile);
      }

      const response = await fetch("https://formsubmit.co/buildwithmumbai@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Report Submitted Successfully!",
          description: "Thank you for your report. We will review it and take appropriate action.",
        });
        form.reset();
        setSelectedFile(null);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your report. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Report Issues
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us identify and address infrastructure problems in Mumbai. Your reports make a difference.
          </p>
        </div>

        {/* Issue Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Potholes</h3>
            <p className="text-gray-600">Report dangerous road conditions, potholes, and damaged pavements that need immediate attention.</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <div className="text-4xl mb-4">🏚️</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Bad Construction</h3>
            <p className="text-gray-600">Report poor quality construction, structural issues, and safety hazards in public infrastructure.</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <div className="text-4xl mb-4">🚻</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Lack of Toilets</h3>
            <p className="text-gray-600">Report areas lacking proper sanitation facilities and public toilet infrastructure.</p>
          </div>
        </div>

        {/* Complaint Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Submit Your Report</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-gray-700">Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-gray-700">Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="issueType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-gray-700">Type of Issue *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select issue type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="potholes">Potholes</SelectItem>
                            <SelectItem value="bad_construction">Bad Construction</SelectItem>
                            <SelectItem value="lack_of_toilets">Lack of Toilets</SelectItem>
                            <SelectItem value="water_issues">Water Supply Issues</SelectItem>
                            <SelectItem value="electricity">Electricity Problems</SelectItem>
                            <SelectItem value="garbage">Garbage Collection</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-gray-700">Location *</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Andheri East, Mumbai" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-gray-700">Description *</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={5} 
                          placeholder="Please provide detailed description of the issue..." 
                          className="resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Image (Optional)</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                    <input 
                      type="file" 
                      id="image" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={handleFileChange}
                    />
                    <label htmlFor="image" className="cursor-pointer">
                      {selectedFile ? (
                        <div>
                          <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                          <p className="text-green-600">{selectedFile.name}</p>
                          <p className="text-sm text-gray-500 mt-1">File selected successfully</p>
                        </div>
                      ) : (
                        <div>
                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-gray-600">Click to upload image or drag and drop</p>
                          <p className="text-sm text-gray-500 mt-1">PNG, JPG up to 10MB</p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>
                
                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm text-gray-700">
                          I consent to my data being used to address this infrastructure issue and understand it may be shared with relevant authorities.
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                  disabled={isSubmitting}
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? "Submitting..." : "Submit Report"}</span>
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
