"use client";

import { useActionState, useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { formSchema } from "@/lib/validation";
import { z } from "zod";
import { toast } from "sonner";
import { createPitch } from "@/lib/actions";
import { useRouter } from "next/navigation";


const StartupForm = () => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [pitch, setPitch] = useState("");
    const router = useRouter();

    const handleFormSubmit = async (prevState: any, formData: FormData) => {
        try {
            const formValues = {
                title: formData.get("title") as string,
                description: formData.get("description") as string,
                category: formData.get("category") as string,
                link: formData.get("link") as string,
                pitch,
            };

            await formSchema.parseAsync(formValues);
            
            const result = await createPitch(prevState, formData, pitch);

            if (result.status == "SUCCESS") {
                toast.success("Your startup pitch has been created successfully!", {
                    position: "top-right",
                    duration: 3000,
                    style: {
                        background: "#4CAF50", // Green for success
                        color: "white",
                        fontWeight: "bold",
                        borderRadius: "10px",
                        padding: "10px 20px",
                        border: "2px solid black",
                    },
                });
                
                router.push(`/startup/${result._id}`)
            }

            return result;
    
        } catch (error) {
            if (error instanceof z.ZodError) {
                const fieldError = error.flatten().fieldErrors;

                setErrors(fieldError as unknown as Record<string, string>);

                toast.error("Please Check Your Inputs and Try Again", {
                    position: "top-right",
                    duration: 4000,
                    style: {
                        background: "#FF4D4D", // Red background for error
                        color: "white",
                        fontWeight: "bold",
                        borderRadius: "10px",
                        padding: "10px 20px",
                        border: "2px solid black",
                    },
                });
                

                return { ...prevState, error: "Validation Failed", status: "ERROR" };
            }

            toast.error("An Unexpected Error Has Occurred", {
                position: "top-right",
                duration: 4000,
                style: {
                    background: "#FF4D4D", // Red background for error
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    padding: "10px 20px",
                    border: "2px solid black",
                },
            });
            

            return {
                ...prevState,
                error: "An unexpected error occurred",
                status: "ERROR",
            }
        }
    };

    const [state, formAction, isPending] = useActionState(handleFormSubmit, {
        error: "",
        status: "INITIAL",
    });

    return (
        <form action={formAction} className="startup-form">
            <div>
                <label htmlFor="title" className="startup-form_label">
                    Title
                </label>
                <Input
                    id="title"
                    name="title"
                    className="border-[3px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-full mt-3 placeholder:text-black-300"
                    required
                    placeholder="Startup Title"
                />

                {errors.title && (
                    <p className="startup-form_error">{errors.title}</p>
                )}
            </div>

            <div>
                <label htmlFor="description" className="startup-form_label">
                    Description
                </label>
                <Textarea
                    id="description"
                    name="description"
                    className="border-[3px] border-black p-5 text-[18px] text-black font-semibold rounded-[20px] mt-3 placeholder:text-black-300"
                    required
                    placeholder="Startup Description"
                />

                {errors.description && (
                    <p className="startup-form_error">{errors.description}</p>
                )}
            </div>

            <div>
                <label htmlFor="category" className="startup-form_label">
                    Category
                </label>
                <Input
                    id="category"
                    name="category"
                    className="border-[3px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-full mt-3 placeholder:text-black-300"
                    required
                    placeholder="Startup Category (Tech, Health, Education, .....)"
                />

                {errors.category && (
                    <p className="startup-form_error">{errors.category}</p>
                )}
            </div>

            <div>
                <label htmlFor="link" className="startup-form_label">
                    Image URL
                </label>
                <Input
                    id="link"
                    name="link"
                    className="border-[3px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-full mt-3 placeholder:text-black-300"
                    required
                    placeholder="Startup Image URL"
                />

                {errors.link && (
                    <p className="startup-form_error">{errors.link}</p>
                )}
            </div>

            <div data-color-mode="light">
                <label htmlFor="pitch" className="startup-form_label">
                    Pitch
                </label>
                <MDEditor
                    value={pitch}
                    onChange={(value) => setPitch(value as string)}
                    id="pitch"
                    preview="edit"
                    height={300}
                    style={{ borderRadius: 20, overflow: "hidden" }}
                    textareaProps={{
                        placeholder:
                            "Briefly describe your idea and what problem it solves.",
                    }}
                    previewOptions={{
                        disallowedElements: ["style"],
                    }}
                />

                {errors.pitch && (
                    <p className="startup-form_error">{errors.pitch}</p>
                )}
            </div>

            <Button
                type="submit"
                className="bg-primary border-[4px] border-black rounded-full p-5 min-h-[70px] w-full font-bold text-[18px] text-white"
                disabled={isPending}
            >
                {isPending ? "Submitting...." : "Submit Your Pitch"}
                <Send className="size-6 ml-2" />
            </Button>
        </form>
    );
};

export default StartupForm;
