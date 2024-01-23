import type { UserResource } from "@clerk/types";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import type { ClerkUserUnsafeMetadata } from "../../../../../types/User/UserProfile";
import Button from "../../../components/kiseki/button";

// TODO: +Sanitise form +Touch up error displaying

type UserInfo = ClerkUserUnsafeMetadata;

type ProfileForm = {
  user: UserResource;
  textBlack?: boolean;
};

export function ProfileForm({ user, textBlack }: ProfileForm) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInfo>({
    defaultValues: {
      school: user.unsafeMetadata.school as string,
      yearLevel: user.unsafeMetadata.yearLevel as string,
      applyingFor: user.unsafeMetadata.applyingFor as string,
    },
  });

  const [, setSearchParams] = useSearchParams();

  function onSubmit(userInfo: UserInfo) {
    user?.update({
      unsafeMetadata: {
        school: userInfo.school,
        yearLevel: userInfo.yearLevel,
        applyingFor: userInfo.applyingFor,
      },
    });
    setSearchParams({});
  }

  const availableYearLevels = [6, 7, 8, 9, 10];
  const applyingFor = ["Scholarship", "Selective School"];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`space-y-8 ${textBlack ? "text-black" : ""}`}
    >
      <div>
        <div className="flex flex-col">
          <label>School</label>
          <input className="border " {...register("school")} />
          {errors.school?.message && (
            <p className="text-red-700">{errors.school.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label>Year Level</label>
          <select {...register("yearLevel")} className="border ">
            {availableYearLevels.map((yearLevel) => (
              <option value={yearLevel} key={yearLevel}>
                Year {yearLevel}
              </option>
            ))}
          </select>

          {errors.yearLevel?.message && (
            <p className="text-red-700">{errors.yearLevel.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label>Applying for</label>
          <select className="border " {...register("applyingFor")}>
            {applyingFor.map((reason) => (
              <option value={reason} key={reason}>
                {reason}
              </option>
            ))}
          </select>
          {errors.applyingFor?.message && (
            <p className="text-red-700">{errors.applyingFor.message}</p>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
}
