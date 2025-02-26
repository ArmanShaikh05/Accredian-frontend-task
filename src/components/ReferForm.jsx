import { useGlobalVariables } from "@/lib/useContext";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { referSchema } from "@/validators/referSchema";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const ReferForm = () => {
  const { openForm, setOpenForm } = useGlobalVariables();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(referSchema),
  });

  const onSubmit = async (data) => {
    const dataToSend = {
      referrerName: data.referrerName,
      referrerEmail: data.referrerEmail,
      referrerPhone: data.referrerPhone,
      refereeName: data.refereeName,
      refereeEmail: data.refereeEmail,
      refereePhone: data.refereePhone,
      referralCode: data.referralCode,
      additionalNote: data.message,
      service: data.interest,
    };

    try {
      setIsSubmitting(true);

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/refer/referral`,
        dataToSend
      );

      if(response.status === 200){
        setOpenForm(false);
        toast("Data submitted successfully")
      }
    } catch (error) {
      if(error.status === 401) return toast("The email has already refered by the referre email")
      toast("Error in submitting data")
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Modal Form */}

      <AlertDialog open={openForm} onOpenChange={setOpenForm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl font-semibold mb-4">
              Refer a Friend
            </AlertDialogTitle>
            <AlertDialogDescription>
              Fill out this form to join our referral
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div className="h-[30rem] overflow-y-auto no-scrollbar bg-white p-6 rounded-lg shadow-lg w-full">
            <form className="space-y-4">
              {/* Referrer Section */}
              <div>
                <h3 className="font-semibold text-lg mb-2">Your Details</h3>
                <input
                  type="text"
                  {...register("referrerName")}
                  placeholder="Your Full Name"
                  className="w-full border p-2 rounded-md text-sm"
                />
                {errors.referrerName && (
                  <p className="text-red-500 text-xs">
                    {errors.referrerName.message}
                  </p>
                )}

                <input
                  type="email"
                  {...register("referrerEmail")}
                  placeholder="Your Email"
                  className="w-full border p-2 rounded-md mt-2 text-sm"
                />
                {errors.referrerEmail && (
                  <p className="text-red-500 text-xs">
                    {errors.referrerEmail.message}
                  </p>
                )}

                <input
                  type="tel"
                  {...register("referrerPhone")}
                  placeholder="Your Phone Number"
                  className="w-full border p-2 rounded-md mt-2 text-sm"
                />
                {errors.referrerPhone && (
                  <p className="text-red-500 text-xs">
                    {errors.referrerPhone.message}
                  </p>
                )}

                <input
                  type="text"
                  {...register("referralCode")}
                  placeholder="Referral Code (Optional)"
                  className="w-full border p-2 rounded-md mt-2 text-sm"
                />
              </div>

              {/* Referee Section */}
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Friend&apos;s Details
                </h3>
                <input
                  type="text"
                  {...register("refereeName")}
                  placeholder="Friend's Full Name"
                  className="w-full border p-2 rounded-md text-sm"
                />
                {errors.refereeName && (
                  <p className="text-red-500 text-xs">
                    {errors.refereeName.message}
                  </p>
                )}

                <input
                  type="email"
                  {...register("refereeEmail")}
                  placeholder="Friend's Email"
                  className="w-full border p-2 rounded-md mt-2 text-sm"
                />
                {errors.refereeEmail && (
                  <p className="text-red-500 text-xs">
                    {errors.refereeEmail.message}
                  </p>
                )}

                <input
                  type="tel"
                  {...register("refereePhone")}
                  placeholder="Friend's Phone Number"
                  className="w-full border p-2 rounded-md mt-2 text-sm"
                />
                {errors.refereePhone && (
                  <p className="text-red-500 text-xs">
                    {errors.refereePhone.message}
                  </p>
                )}

                <select
                  {...register("interest")}
                  className="w-full border p-2 rounded-md mt-2"
                >
                  <option value="">Select an Interested Service</option>
                  <option value="Course">Course</option>
                  <option value="Subscription">Subscription</option>
                  <option value="Other">Other</option>
                </select>
                {errors.interest && (
                  <p className="text-red-500 text-sm">
                    {errors.interest.message}
                  </p>
                )}
              </div>

              {/* Additional Fields */}
              <textarea
                {...register("message")}
                placeholder="Additional Notes (Optional)"
                className="w-full border p-2 rounded-md mt-2  text-sm"
              ></textarea>

              <div className="flex items-center gap-2">
                <input type="checkbox" {...register("consent")} />
                <label className="text-sm">
                  I agree to be contacted and accept the terms & conditions.
                </label>
              </div>
              {errors.consent && (
                <p className="text-red-500 text-xs">{errors.consent.message}</p>
              )}
            </form>
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className={
                "bg-[#1A73E8] text-white shadow-xs hover:bg-[#4188e6] cursor-pointer py-2 px-[18px] rounded-[6px]"
              }
              onClick={handleSubmit(onSubmit)}
              disabled={isSubmitting}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ReferForm;
