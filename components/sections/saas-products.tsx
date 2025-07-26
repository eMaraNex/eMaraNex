"use client";

import { useState } from "react";
import { ExternalLink, ArrowRight, ChevronLeft, ChevronRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SAAS_PRODUCTS } from "@/lib/constants";

interface SaaSProductsProps {
  className?: string;
  products?: any[];
}

export function SaaSProducts({ className, products = SAAS_PRODUCTS }: SaaSProductsProps) {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentProductIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleProductClick = (productLink: string) => {
    if (productLink && productLink !== "#") {
      window.open(productLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="products"
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="text-center mb-4">
            <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900 dark:to-green-900 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700">
              OUR SAAS PRODUCTS
            </Badge>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
            Industry-Specific SaaS Solutions
          </h2>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            Choose from our growing portfolio of SaaS products designed for specific industries. Each platform offers
            subscription-based access with all features included and regular updates.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Card
                key={index}
                className={`border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden group cursor-pointer ${product.bgColor}`}
                onClick={() => handleProductClick(product.link)}
              >
                <div className="relative">
                  <div
                    className="h-48 relative overflow-hidden"
                    style={{
                      background: `linear-gradient(to bottom right, rgb(16 185 129), rgb(34 197 94), rgb(20 184 166))`
                    }}
                  >
                    {/* Sungura Master - Emerald to Green to Teal */}
                    {index === 0 && (
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(to bottom right, rgb(16 185 129), rgb(34 197 94), rgb(20 184 166))`
                        }}
                      />
                    )}

                    {/* Cosmos Scents - Pink to Rose to Purple */}
                    {index === 1 && (
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(to bottom right, rgb(236 72 153), rgb(244 63 94), rgb(168 85 247))`
                        }}
                      />
                    )}

                    {/* Zao - Amber to Orange to Red */}
                    {index === 2 && (
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(to bottom right, rgb(245 158 11), rgb(249 115 22), rgb(239 68 68))`
                        }}
                      />
                    )}

                    {/* RetailFlow - Blue to Cyan to Indigo */}
                    {index === 3 && (
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(to bottom right, rgb(59 130 246), rgb(6 182 212), rgb(99 102 241))`
                        }}
                      />
                    )}

                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-6xl mb-4 group-hover:animate-bounce">
                          <IconComponent className="w-16 h-16 mx-auto" />
                        </div>
                        <div className="text-2xl font-bold mb-2">{product.name}</div>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                          {product.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Badge className="bg-white/20 text-white border-white/30">{product.stats.subscribers}</Badge>
                      <Badge className="bg-white/20 text-white border-white/30">
                        {product.stats.retention} retention
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-emerald-600 transition-colors">{product.name}</h3>
                    <div className="text-right">
                      <div className="text-lg font-bold text-emerald-600">{product.pricing || "Contact for Pricing"}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.slice(0, 6).map((feature: any, featureIndex: any) => (
                      <Badge
                        key={featureIndex}
                        variant="outline"
                        className="text-xs bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-colors"
                      >
                        {feature}
                      </Badge>
                    ))}
                    {product.features.length > 6 && (
                      <Badge variant="outline" className="text-xs">
                        +{product.features.length - 6} more features
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      className="flex-1 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      style={{
                        background: index === 0 ? `linear-gradient(to right, rgb(16 185 129), rgb(34 197 94), rgb(20 184 166))` :
                          index === 1 ? `linear-gradient(to right, rgb(236 72 153), rgb(244 63 94), rgb(168 85 247))` :
                            index === 2 ? `linear-gradient(to right, rgb(245 158 11), rgb(249 115 22), rgb(239 68 68))` :
                              `linear-gradient(to right, rgb(59 130 246), rgb(6 182 212), rgb(99 102 241))`
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProductClick(product.link);
                      }}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {product.cta}
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:bg-emerald-50 dark:hover:bg-emerald-950 hover:border-emerald-300 dark:hover:border-emerald-700 bg-transparent"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProductClick(product.link);
                      }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProductIndex * 100}%)` }}
              >
                {products.map((product, index) => {
                  const IconComponent = product.icon;
                  return (
                    <div key={index} className="w-full flex-shrink-0 px-2">
                      <Card
                        className={`border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden group cursor-pointer ${product.bgColor}`}
                        onClick={() => handleProductClick(product.link)}
                      >
                        <div className="relative">
                          <div
                            className="h-48 relative overflow-hidden"
                            style={{
                              background: index === 0 ? `linear-gradient(to bottom right, rgb(16 185 129), rgb(34 197 94), rgb(20 184 166))` :
                                index === 1 ? `linear-gradient(to bottom right, rgb(236 72 153), rgb(244 63 94), rgb(168 85 247))` :
                                  index === 2 ? `linear-gradient(to bottom right, rgb(245 158 11), rgb(249 115 22), rgb(239 68 68))` :
                                    `linear-gradient(to bottom right, rgb(59 130 246), rgb(6 182 212), rgb(99 102 241))`
                            }}
                          >
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                              <div className="text-white text-center">
                                <div className="text-6xl mb-4 group-hover:animate-bounce">
                                  <IconComponent className="w-16 h-16 mx-auto" />
                                </div>
                                <div className="text-2xl font-bold mb-2">{product.name}</div>
                                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                                  {product.category}
                                </Badge>
                              </div>
                            </div>
                            <div className="absolute top-4 right-4 flex flex-col gap-2">
                              <Badge className="bg-white/20 text-white border-white/30 text-xs">
                                {product.stats.subscribers}
                              </Badge>
                              <Badge className="bg-white/20 text-white border-white/30 text-xs">
                                {product.stats.retention}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold group-hover:text-emerald-600 transition-colors">
                              {product.name}
                            </h3>
                            <div className="text-right">
                              <div className="text-sm font-bold text-emerald-600">{product.pricing || "Contact for Pricing"}</div>
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{product.description}</p>
                          <div className="flex flex-wrap gap-1 mb-4">
                            {product.features.slice(0, 3).map((feature: any, featureIndex: any) => (
                              <Badge
                                key={featureIndex}
                                variant="outline"
                                className="text-xs bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300"
                              >
                                {feature}
                              </Badge>
                            ))}
                            {product.features.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{product.features.length - 3} more
                              </Badge>
                            )}
                          </div>
                          <Button
                            className="w-full text-white shadow-lg hover:shadow-xl transition-all duration-300"
                            style={{
                              background: index === 0 ? `linear-gradient(to right, rgb(16 185 129), rgb(34 197 94), rgb(20 184 166))` :
                                index === 1 ? `linear-gradient(to right, rgb(236 72 153), rgb(244 63 94), rgb(168 85 247))` :
                                  index === 2 ? `linear-gradient(to right, rgb(245 158 11), rgb(249 115 22), rgb(239 68 68))` :
                                    `linear-gradient(to right, rgb(59 130 246), rgb(6 182 212), rgb(99 102 241))`
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleProductClick(product.link);
                            }}
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            {product.cta}
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Carousel Controls */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 z-10"
              onClick={prevProduct}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 z-10"
              onClick={nextProduct}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Mobile Carousel Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentProductIndex ? "bg-emerald-500 w-6" : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  onClick={() => setCurrentProductIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Try Our SaaS Solutions?</h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Start with a free trial of any of our SaaS products. No setup fees, no long-term contracts - just powerful
              software that grows with your business.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-emerald-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Start Free Trial Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}