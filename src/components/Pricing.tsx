import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CheckIcon } from "lucide-react";
import React from "react";
import { AnimatedShinyText } from "./ui/animated-shiny-text";

const plans = [
  {
    name: "Startup",
    price: 39,
    features: [
      "2 AI Agent Instances",
      "Basic Neural Processing",
      "24/7 Support",
      "Weekly Analytics",
      "Basic Integration Support",
    ],
  },
  {
    name: "Professional",
    price: 89,
    features: [
      "10 AI Agent Instances",
      "Advanced Neural Networks",
      "Priority Support",
      "Real-time Analytics",
      "Custom Integration",
      "API Access",
      "Advanced Security",
    ],
  },
  {
    name: "Enterprise",
    price: 'Custom',
    features: [
      "Unlimited Agents",
      "Full Neural Suite",
      "Dedicated Support Team",
      "Advanced Analytics Dashboard",
      "Custom Development",
      "Full API Access",
      "Enterprise Security",
      "Custom Training",
    ],
  }
];

export default function PricingSectionCards() {
  return (
    <>
      {/* Pricing */}
      <div className="px-10 py-24 lg:py-32">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="border-b border-fuchsia-500/50 pb-2 text-2xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-fuchsia-400 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="mt-1 text-muted-foreground">
            Scale your AI capabilities with our flexible pricing.
          </p>
        </div>
        {/* Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-end justify-end">
          {/* Card */}
          {plans.map((plan, index) => (
            <Card key={index} className={`text-white ${plan.name === 'Professional' ? 'bg-gradient-to-br from-fuchsia-500/10 to-blue-500/10 border-2 border-purple-500' : 'bg-neutral-950 border-neutral-700'} `}>
                <CardHeader className="text-center pb-2">
                  <Badge className="uppercase w-max self-center mb-3">
                    {plan.name === 'Professional' ? (
                      <AnimatedShinyText>
                        {plan.name}
                      </AnimatedShinyText>
                    ) : (
                      plan.name
                    )}
                  </Badge>
                <span className="font-bold text-5xl">£{plan.price}
                  <span className={`${plan.name === 'Enterprise' ? 'hidden' : 'text-muted-foreground text-sm'}`}>/month</span>
                </span>
              </CardHeader>   
              <CardContent>
                <ul className="mt-7 space-y-2.5 text-sm">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex space-x-2">
                      <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                      <span className='text-white'>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                variant={plan.name === 'Professional' ? 'shine' : 'outline'}
                className={`${plan.name === 'Professional' ? '' : 'bg-neutral-950 hover:bg-neutral-900 border border-fuchsia-500/50 hover:text-white'} w-full`}>Sign up</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      {/* End Pricing */}
    </>
  );
}
