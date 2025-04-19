
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from 'sonner';
import { PlusCircle, Star, Download, BarChart, ThumbsUp, ChevronDown } from 'lucide-react';
import { 
    Dialog, 
    DialogContent, 
    DialogDescription,
    DialogFooter, 
    DialogHeader, 
    DialogTitle, 
    DialogTrigger 
} from '@/components/ui/dialog';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface FeedbackForm {
  title: string;
  description: string;
  active: boolean;
  questions: {
    id: string;
    text: string;
    type: 'rating' | 'text' | 'radio';
    options?: string[];
    required: boolean;
  }[];
  settings: {
    showThankYouMessage: boolean;
    thankYouMessage: string;
    redirectAfterSubmission: boolean;
    redirectUrl: string;
    allowAnonymous: boolean;
    emailNotifications: boolean;
    notificationEmail: string;
  };
}

interface FeedbackResponse {
  id: string;
  date: string;
  email: string;
  rating: number;
  comments: string;
  answers: { questionId: string; answer: string }[];
}

const FeedbackFormAdmin: React.FC = () => {
  const [form, setForm] = useState<FeedbackForm>({
    title: 'Rate Your Experience',
    description: 'We value your feedback. Please let us know how we did!',
    active: true,
    questions: [
      {
        id: '1',
        text: 'How would you rate your overall experience?',
        type: 'rating',
        required: true,
      },
      {
        id: '2',
        text: 'What did you like most about our service?',
        type: 'text',
        required: false,
      },
      {
        id: '3',
        text: 'How did you hear about us?',
        type: 'radio',
        options: ['Search Engine', 'Social Media', 'Friend/Referral', 'Advertisement', 'Other'],
        required: false,
      }
    ],
    settings: {
      showThankYouMessage: true,
      thankYouMessage: 'Thank you for your feedback! We appreciate your time.',
      redirectAfterSubmission: false,
      redirectUrl: '',
      allowAnonymous: true,
      emailNotifications: false,
      notificationEmail: '',
    }
  });
  
  const [responses, setResponses] = useState<FeedbackResponse[]>([
    {
      id: '1',
      date: '2023-04-15',
      email: 'john.doe@example.com',
      rating: 5,
      comments: 'Great service, very professional team.',
      answers: [
        { questionId: '1', answer: '5' },
        { questionId: '2', answer: 'The customer service was excellent.' },
        { questionId: '3', answer: 'Friend/Referral' }
      ]
    },
    {
      id: '2',
      date: '2023-04-14',
      email: 'jane.smith@example.com',
      rating: 4,
      comments: 'Good experience overall, but could improve response time.',
      answers: [
        { questionId: '1', answer: '4' },
        { questionId: '2', answer: 'The quality of the product.' },
        { questionId: '3', answer: 'Social Media' }
      ]
    },
    {
      id: '3',
      date: '2023-04-13',
      email: 'anonymous@example.com',
      rating: 3,
      comments: 'Average experience, nothing special.',
      answers: [
        { questionId: '1', answer: '3' },
        { questionId: '2', answer: 'Nothing particularly stood out.' },
        { questionId: '3', answer: 'Search Engine' }
      ]
    }
  ]);
  
  const [newQuestion, setNewQuestion] = useState({
    text: '',
    type: 'rating' as const,
    options: ['Option 1', 'Option 2', 'Option 3'],
    required: false
  });
  
  const handleFormChange = (field: string, value: any) => {
    if (field.includes('.')) {
      const [section, property] = field.split('.');
      setForm({
        ...form,
        [section]: {
          ...form[section as keyof typeof form] as any,
          [property]: value
        }
      });
    } else {
      setForm({ ...form, [field]: value });
    }
  };
  
  const handleAddQuestion = () => {
    if (!newQuestion.text) {
      toast.error('Question text is required');
      return;
    }
    
    const newQuestionWithId = {
      ...newQuestion,
      id: Date.now().toString(),
    };
    
    setForm({
      ...form,
      questions: [...form.questions, newQuestionWithId]
    });
    
    setNewQuestion({
      text: '',
      type: 'rating',
      options: ['Option 1', 'Option 2', 'Option 3'],
      required: false
    });
    
    toast.success('New question added');
  };
  
  const handleDeleteQuestion = (id: string) => {
    setForm({
      ...form,
      questions: form.questions.filter(q => q.id !== id)
    });
    toast.success('Question removed');
  };
  
  const handleOptionChange = (index: number, value: string) => {
    const updatedOptions = [...newQuestion.options];
    updatedOptions[index] = value;
    setNewQuestion({ ...newQuestion, options: updatedOptions });
  };
  
  const handleAddOption = () => {
    setNewQuestion({
      ...newQuestion,
      options: [...newQuestion.options, `Option ${newQuestion.options.length + 1}`]
    });
  };
  
  const handleRemoveOption = (index: number) => {
    const updatedOptions = newQuestion.options.filter((_, i) => i !== index);
    setNewQuestion({ ...newQuestion, options: updatedOptions });
  };
  
  const handleSaveChanges = () => {
    toast.success('Form settings saved successfully');
  };
  
  const handleExportResponses = () => {
    toast.success('Responses exported to CSV');
  };
  
  // Calculate average rating
  const averageRating = responses.length > 0
    ? responses.reduce((sum, resp) => sum + resp.rating, 0) / responses.length
    : 0;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Rate Us Form</h2>
        <Button onClick={handleSaveChanges}>Save Changes</Button>
      </div>
      
      <Tabs defaultValue="form">
        <TabsList className="mb-4">
          <TabsTrigger value="form">Form Settings</TabsTrigger>
          <TabsTrigger value="questions">Questions</TabsTrigger>
          <TabsTrigger value="responses">Responses ({responses.length})</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>
        
        <TabsContent value="form" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Form Details</CardTitle>
              <CardDescription>Basic information about your feedback form</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="formTitle">Form Title</Label>
                <Input
                  id="formTitle"
                  value={form.title}
                  onChange={(e) => handleFormChange('title', e.target.value)}
                  placeholder="Enter form title"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="formDescription">Form Description</Label>
                <Textarea
                  id="formDescription"
                  value={form.description}
                  onChange={(e) => handleFormChange('description', e.target.value)}
                  placeholder="Enter form description"
                  rows={3}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  checked={form.active}
                  onCheckedChange={(checked) => handleFormChange('active', checked)}
                  id="formActive"
                />
                <Label htmlFor="formActive">Form Active</Label>
                <span className="text-sm text-gray-500 ml-2">
                  {form.active ? 'The form is visible to users' : 'The form is currently hidden'}
                </span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Form Settings</CardTitle>
              <CardDescription>Configure how your feedback form behaves</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={form.settings.showThankYouMessage}
                    onCheckedChange={(checked) => handleFormChange('settings.showThankYouMessage', checked)}
                    id="showThankYouMessage"
                  />
                  <Label htmlFor="showThankYouMessage">Show Thank You Message</Label>
                </div>
                
                {form.settings.showThankYouMessage && (
                  <div className="ml-6 space-y-2">
                    <Label htmlFor="thankYouMessage">Thank You Message</Label>
                    <Textarea
                      id="thankYouMessage"
                      value={form.settings.thankYouMessage}
                      onChange={(e) => handleFormChange('settings.thankYouMessage', e.target.value)}
                      placeholder="Enter thank you message"
                      rows={2}
                    />
                  </div>
                )}
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={form.settings.redirectAfterSubmission}
                    onCheckedChange={(checked) => handleFormChange('settings.redirectAfterSubmission', checked)}
                    id="redirectAfterSubmission"
                  />
                  <Label htmlFor="redirectAfterSubmission">Redirect After Submission</Label>
                </div>
                
                {form.settings.redirectAfterSubmission && (
                  <div className="ml-6 space-y-2">
                    <Label htmlFor="redirectUrl">Redirect URL</Label>
                    <Input
                      id="redirectUrl"
                      value={form.settings.redirectUrl}
                      onChange={(e) => handleFormChange('settings.redirectUrl', e.target.value)}
                      placeholder="https://example.com/thank-you"
                    />
                  </div>
                )}
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch
                  checked={form.settings.allowAnonymous}
                  onCheckedChange={(checked) => handleFormChange('settings.allowAnonymous', checked)}
                  id="allowAnonymous"
                />
                <Label htmlFor="allowAnonymous">Allow Anonymous Submissions</Label>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={form.settings.emailNotifications}
                    onCheckedChange={(checked) => handleFormChange('settings.emailNotifications', checked)}
                    id="emailNotifications"
                  />
                  <Label htmlFor="emailNotifications">Email Notifications</Label>
                </div>
                
                {form.settings.emailNotifications && (
                  <div className="ml-6 space-y-2">
                    <Label htmlFor="notificationEmail">Notification Email</Label>
                    <Input
                      id="notificationEmail"
                      value={form.settings.notificationEmail}
                      onChange={(e) => handleFormChange('settings.notificationEmail', e.target.value)}
                      placeholder="email@example.com"
                      type="email"
                    />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="questions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Questions</CardTitle>
              <CardDescription>Manage the questions in your feedback form</CardDescription>
            </CardHeader>
            <CardContent>
              {form.questions.length === 0 ? (
                <div className="text-center p-8 text-gray-500">
                  <p>No questions added yet</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {form.questions.map((question, index) => (
                    <div key={question.id} className="border rounded-lg p-4 bg-gray-50">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">Q{index + 1}:</span>
                            <span>{question.text}</span>
                            {question.required && (
                              <span className="text-red-500 text-sm">(Required)</span>
                            )}
                          </div>
                          <div className="text-sm text-gray-500 mt-1">
                            Type: {question.type.charAt(0).toUpperCase() + question.type.slice(1)}
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          onClick={() => handleDeleteQuestion(question.id)}
                        >
                          Remove
                        </Button>
                      </div>
                      
                      {question.type === 'radio' && question.options && (
                        <div className="ml-6 mt-2">
                          <p className="text-sm text-gray-600 mb-1">Options:</p>
                          <ul className="ml-6 list-disc text-sm text-gray-600">
                            {question.options.map((option, i) => (
                              <li key={i}>{option}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Add New Question</CardTitle>
              <CardDescription>Create a new question for your feedback form</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="questionText">Question Text</Label>
                <Input
                  id="questionText"
                  value={newQuestion.text}
                  onChange={(e) => setNewQuestion({ ...newQuestion, text: e.target.value })}
                  placeholder="Enter your question"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="questionType">Question Type</Label>
                <RadioGroup
                  value={newQuestion.type}
                  onValueChange={(value) => setNewQuestion({ ...newQuestion, type: value as any })}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="rating" id="questionTypeRating" />
                    <Label htmlFor="questionTypeRating">Rating (1-5 stars)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="text" id="questionTypeText" />
                    <Label htmlFor="questionTypeText">Text (Open-ended response)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="radio" id="questionTypeRadio" />
                    <Label htmlFor="questionTypeRadio">Multiple Choice</Label>
                  </div>
                </RadioGroup>
              </div>
              
              {newQuestion.type === 'radio' && (
                <div className="space-y-3 border-t pt-3">
                  <Label>Multiple Choice Options</Label>
                  {newQuestion.options.map((option, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Input
                        value={option}
                        onChange={(e) => handleOptionChange(index, e.target.value)}
                        placeholder={`Option ${index + 1}`}
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:bg-red-50"
                        onClick={() => handleRemoveOption(index)}
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    onClick={handleAddOption}
                  >
                    Add Option
                  </Button>
                </div>
              )}
              
              <div className="flex items-center space-x-2 mt-4">
                <Switch
                  checked={newQuestion.required}
                  onCheckedChange={(checked) => setNewQuestion({ ...newQuestion, required: checked })}
                  id="questionRequired"
                />
                <Label htmlFor="questionRequired">Required Question</Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleAddQuestion}>Add Question</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="responses" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Feedback Responses</CardTitle>
                <CardDescription>View and manage feedback submissions</CardDescription>
              </div>
              <div className="flex gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="gap-2">
                      <ChevronDown size={16} />
                      <span>Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Manage Responses</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleExportResponses} className="gap-2">
                      <Download size={16} />
                      <span>Export to CSV</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2">
                      <BarChart size={16} />
                      <span>Generate Report</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableCaption>A list of all feedback responses.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead className="w-[300px]">Comments</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {responses.map((response) => (
                    <TableRow key={response.id}>
                      <TableCell>{response.date}</TableCell>
                      <TableCell>{response.email}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={i < response.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                              size={16}
                            />
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="max-w-[300px] truncate">
                        {response.comments || 'No comments provided'}
                      </TableCell>
                      <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm">View Details</Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-md">
                            <DialogHeader>
                              <DialogTitle>Response Details</DialogTitle>
                              <DialogDescription>
                                Submitted on {response.date}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 py-4">
                              <div>
                                <p className="text-sm font-medium">Email</p>
                                <p>{response.email}</p>
                              </div>
                              <div>
                                <p className="text-sm font-medium">Rating</p>
                                <div className="flex items-center mt-1">
                                  {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                      key={i}
                                      className={i < response.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                                      size={18}
                                    />
                                  ))}
                                </div>
                              </div>
                              <div>
                                <p className="text-sm font-medium">Comments</p>
                                <p className="mt-1">{response.comments || 'No comments provided'}</p>
                              </div>
                              <div className="space-y-2">
                                <p className="text-sm font-medium">Responses</p>
                                {response.answers.map((answer) => {
                                  const question = form.questions.find(q => q.id === answer.questionId);
                                  return question ? (
                                    <div key={answer.questionId} className="border-t pt-2">
                                      <p className="text-sm font-medium">{question.text}</p>
                                      <p className="mt-1">{answer.answer}</p>
                                    </div>
                                  ) : null;
                                })}
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="insights" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Responses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{responses.length}</div>
                <p className="text-xs text-muted-foreground">
                  +{responses.length > 0 ? 2 : 0} from last week
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{averageRating.toFixed(1)}</div>
                <div className="flex items-center mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={i < Math.round(averageRating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                      size={16}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Satisfaction Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {responses.length > 0
                    ? `${Math.round((responses.filter(r => r.rating >= 4).length / responses.length) * 100)}%`
                    : '0%'
                  }
                </div>
                <p className="text-xs text-muted-foreground">
                  Ratings of 4 stars or above
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Rating Distribution</CardTitle>
              <CardDescription>Breakdown of ratings received</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[5, 4, 3, 2, 1].map((rating) => {
                  const count = responses.filter(r => r.rating === rating).length;
                  const percentage = responses.length > 0
                    ? Math.round((count / responses.length) * 100)
                    : 0;
                  
                  return (
                    <div key={rating} className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                              size={14}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-medium">{rating} Star{rating !== 1 ? 's' : ''}</span>
                        <span className="text-sm text-gray-500">({count})</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-yellow-500 rounded-full"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-500 text-right">{percentage}%</div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Comments</CardTitle>
              <CardDescription>Latest feedback from users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {responses
                  .filter(r => r.comments)
                  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                  .slice(0, 3)
                  .map((response) => (
                    <div key={response.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center">
                          <ThumbsUp className="h-4 w-4 mr-2 text-green-500" />
                          <span className="font-medium">{response.email}</span>
                        </div>
                        <div className="text-sm text-gray-500">{response.date}</div>
                      </div>
                      <div className="flex items-center mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={i < response.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                            size={14}
                          />
                        ))}
                      </div>
                      <p className="text-gray-700">{response.comments}</p>
                    </div>
                  ))}
                
                {responses.filter(r => r.comments).length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <p>No comments received yet</p>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View All Comments</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FeedbackFormAdmin;
