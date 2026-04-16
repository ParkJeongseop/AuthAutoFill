.class Landroidx/appcompat/widget/m$c$a;
.super Ljava/lang/Object;
.source "SourceFile"

# interfaces
.implements Landroid/widget/AdapterView$OnItemClickListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Landroidx/appcompat/widget/m$c;-><init>(Landroidx/appcompat/widget/m;Landroid/content/Context;Landroid/util/AttributeSet;I)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic b:Landroidx/appcompat/widget/m;

.field final synthetic c:Landroidx/appcompat/widget/m$c;


# direct methods
.method constructor <init>(Landroidx/appcompat/widget/m$c;Landroidx/appcompat/widget/m;)V
    .locals 0

    iput-object p1, p0, Landroidx/appcompat/widget/m$c$a;->c:Landroidx/appcompat/widget/m$c;

    iput-object p2, p0, Landroidx/appcompat/widget/m$c$a;->b:Landroidx/appcompat/widget/m;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onItemClick(Landroid/widget/AdapterView;Landroid/view/View;IJ)V
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/widget/AdapterView<",
            "*>;",
            "Landroid/view/View;",
            "IJ)V"
        }
    .end annotation

    iget-object p1, p0, Landroidx/appcompat/widget/m$c$a;->c:Landroidx/appcompat/widget/m$c;

    iget-object p1, p1, Landroidx/appcompat/widget/m$c;->O:Landroidx/appcompat/widget/m;

    invoke-virtual {p1, p3}, Landroid/widget/Spinner;->setSelection(I)V

    iget-object p1, p0, Landroidx/appcompat/widget/m$c$a;->c:Landroidx/appcompat/widget/m$c;

    iget-object p1, p1, Landroidx/appcompat/widget/m$c;->O:Landroidx/appcompat/widget/m;

    invoke-virtual {p1}, Landroid/widget/Spinner;->getOnItemClickListener()Landroid/widget/AdapterView$OnItemClickListener;

    move-result-object p1

    if-eqz p1, :cond_0

    iget-object p1, p0, Landroidx/appcompat/widget/m$c$a;->c:Landroidx/appcompat/widget/m$c;

    iget-object p4, p1, Landroidx/appcompat/widget/m$c;->O:Landroidx/appcompat/widget/m;

    iget-object p1, p1, Landroidx/appcompat/widget/m$c;->M:Landroid/widget/ListAdapter;

    invoke-interface {p1, p3}, Landroid/widget/ListAdapter;->getItemId(I)J

    move-result-wide v0

    invoke-virtual {p4, p2, p3, v0, v1}, Landroid/widget/Spinner;->performItemClick(Landroid/view/View;IJ)Z

    :cond_0
    iget-object p1, p0, Landroidx/appcompat/widget/m$c$a;->c:Landroidx/appcompat/widget/m$c;

    invoke-virtual {p1}, Landroidx/appcompat/widget/w;->i()V

    return-void
.end method
