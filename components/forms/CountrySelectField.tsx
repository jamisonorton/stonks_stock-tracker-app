import { Controller } from "react-hook-form";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CountrySelectField = ({
  name,
  label,
  control,
  error,
  required,
}: CountrySelectProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="form-label">
        CountrySelectorHere
      </Label>
    </div>
  );
};

export default CountrySelectField;
