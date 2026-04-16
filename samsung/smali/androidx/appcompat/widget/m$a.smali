.class Landroidx/appcompat/widget/m$a;
.super Landroidx/appcompat/widget/u;
.source "SourceFile"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Landroidx/appcompat/widget/m;-><init>(Landroid/content/Context;Landroid/util/AttributeSet;IILandroid/content/res/Resources$Theme;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic j:Landroidx/appcompat/widget/m$c;

.field final synthetic k:Landroidx/appcompat/widget/m;


# direct methods
.method constructor <init>(Landroidx/appcompat/widget/m;Landroid/view/View;Landroidx/appcompat/widget/m$c;)V
    .locals 0

    iput-object p1, p0, Landroidx/appcompat/widget/m$a;->k:Landroidx/appcompat/widget/m;

    iput-object p3, p0, Landroidx/appcompat/widget/m$a;->j:Landroidx/appcompat/widget/m$c;

    invoke-direct {p0, p2}, Landroidx/appcompat/widget/u;-><init>(Landroid/view/View;)V

    return-void
.end method


# virtual methods
.method public b()Lf/h;
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/widget/m$a;->j:Landroidx/appcompat/widget/m$c;

    return-object v0
.end method

.method public c()Z
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/widget/m$a;->k:Landroidx/appcompat/widget/m;

    iget-object v0, v0, Landroidx/appcompat/widget/m;->g:Landroidx/appcompat/widget/m$c;

    invoke-virtual {v0}, Landroidx/appcompat/widget/w;->b()Z

    move-result v0

    if-nez v0, :cond_0

    iget-object v0, p0, Landroidx/appcompat/widget/m$a;->k:Landroidx/appcompat/widget/m;

    iget-object v0, v0, Landroidx/appcompat/widget/m;->g:Landroidx/appcompat/widget/m$c;

    invoke-virtual {v0}, Landroidx/appcompat/widget/m$c;->e()V

    :cond_0
    const/4 v0, 0x1

    return v0
.end method
