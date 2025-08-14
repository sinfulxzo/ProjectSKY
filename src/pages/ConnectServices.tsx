import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Globe, ShoppingBag, Link2, CheckCircle } from "lucide-react";

const ConnectServicesMain = () => {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-navy-800 mb-2">Connect Services</h1>
        <p className="text-gray-600">Connect your website and e-commerce platforms to sync data automatically</p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Globe className="h-6 w-6 text-teal-600" />
              Connect Website
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">Connect your website to track visitors, orders, and analytics.</p>
            <div className="space-y-3">
              <div>
                <Label htmlFor="website-url">Website URL</Label>
                <Input
                  id="website-url"
                  placeholder="https://yourwebsite.com"
                  className="mt-1"
                />
              </div>
              <Button className="w-full bg-teal-600 hover:bg-teal-700">
                <Link2 className="h-4 w-4 mr-2" />
                Connect Website
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <ShoppingBag className="h-6 w-6 text-orange-600" />
              Connect Amazon
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600">Sync your Amazon seller account to track orders and inventory.</p>
            <div className="space-y-3">
              <div>
                <Label htmlFor="amazon-seller-id">Amazon Seller ID</Label>
                <Input
                  id="amazon-seller-id"
                  placeholder="Enter your Seller ID"
                  className="mt-1"
                />
              </div>
              <Button className="w-full bg-orange-600 hover:bg-orange-700">
                <Link2 className="h-4 w-4 mr-2" />
                Connect Amazon
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Connected Services */}
      <Card>
        <CardHeader>
          <CardTitle>Connected Services</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-green-800">Bank Account - SBI</p>
                  <p className="text-sm text-green-600">Connected and syncing</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Manage
              </Button>
            </div>
            
            <div className="text-center py-8 text-gray-500">
              <p>No additional services connected yet.</p>
              <p className="text-sm">Connect your website or Amazon account above to get started.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ConnectServices = () => (
  <SidebarProvider>
    <div className="min-h-screen bg-gray-50 flex w-full">
      <DashboardSidebar />
      <ConnectServicesMain />
    </div>
  </SidebarProvider>
);

export default ConnectServices;