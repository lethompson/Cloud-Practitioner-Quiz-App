function Question(question, ans1, ans2, ans3, ans4, correct) {
  this.question = question;
  this.answers = [ans1, ans2, ans3, ans4];
  this.answerCorrect = correct;
}

var q1 = new Question('Which of the following services uses AWS Edge Locations?', 'Amazon Virtual Private Cloud (Amazon VPC)', 'Amazon CloudFront', 'Amazon Elastic Compute Cloud (Amazon EC2)', 'AWS Storage Gateway', 1);

var q2 = new Question('Which of the following is a benefit of Amazon EC2 over on-premises physical servers?', 'Automated backup', 'Paying only for what you use', 'The ability to choose hardware vendors', 'Root/administrator access', 1);


var q3 = new Question('Which AWS service provides infrastructure security optimization recommendations?', 'AWS API', 'Reserved Instances', 'AWS Trusted Advisor', 'Amazon EC2 SpotFleet', 2);

var q4 = new Question('Which service allows for the collection and tracking of performance metrics for AWS services?', 'Amazon CloudFront', 'Amazon CloudSearch', 'Amazon CloudWatch', 'Amazon Machine Learning (Amazon ML)', 3);
var q5 = new Question('Which service should an administrator use to register a new domain name with AWS?', 'Amazon Route 53', 'Amazon Cloud Front', 'Elastic Load Balancing', 'Amazon VPC', 1);


var list = [q1, q2, q3, q4, q5];
